import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../HomePage';

// Mock window.open for WhatsApp test
const mockWindowOpen = jest.fn();
Object.defineProperty(window, 'open', {
  value: mockWindowOpen,
});

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

describe('Investment Form Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders complete investment form', () => {
    render(<HomePage />);
    
    // Check for investment form elements
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tell us about your investment interests...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send investment inquiry/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /whatsapp/i })).toBeInTheDocument();
  });

  test('allows user to fill out investment form fields', async () => {
    const user = userEvent.setup();
    render(<HomePage />);
    
    const nameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('Email Address');
    const phoneInput = screen.getByPlaceholderText('Phone Number');
    const messageTextarea = screen.getByPlaceholderText('Tell us about your investment interests...');
    
    await user.type(nameInput, 'John Investor');
    await user.type(emailInput, 'john@example.com');
    await user.type(phoneInput, '+971501234567');
    await user.type(messageTextarea, 'I am interested in the $100K investment opportunity.');
    
    expect(nameInput).toHaveValue('John Investor');
    expect(emailInput).toHaveValue('john@example.com');
    expect(phoneInput).toHaveValue('+971501234567');
    expect(messageTextarea).toHaveValue('I am interested in the $100K investment opportunity.');
  });

  test('form has correct Netlify attributes for submission', () => {
    render(<HomePage />);
    
    const form = screen.getByRole('form', { hidden: true });
    expect(form).toHaveAttribute('name', 'investor-contact');
    expect(form).toHaveAttribute('method', 'POST');
    expect(form).toHaveAttribute('data-netlify', 'true');
    expect(form).toHaveAttribute('netlify-honeypot', 'bot-field');
    
    // Check for hidden fields
    expect(screen.getByDisplayValue('investor-contact')).toBeInTheDocument();
    expect(screen.getByLabelText(/don't fill this out if you're human/i)).toBeInTheDocument();
  });

  test('WhatsApp button opens correct URL', async () => {
    const user = userEvent.setup();
    render(<HomePage />);
    
    const whatsappButton = screen.getByRole('button', { name: /whatsapp/i });
    await user.click(whatsappButton);
    
    expect(mockWindowOpen).toHaveBeenCalledWith('https://wa.me/971522233989', '_blank');
  });

  test('form validation works for required fields', async () => {
    const user = userEvent.setup();
    render(<HomePage />);
    
    const submitButton = screen.getByRole('button', { name: /send investment inquiry/i });
    const nameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('Email Address');
    const phoneInput = screen.getByPlaceholderText('Phone Number');
    
    // Try to submit empty form
    await user.click(submitButton);
    
    // HTML5 validation should prevent submission
    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(phoneInput).toBeRequired();
  });

  test('navigation links have correct href attributes', () => {
    render(<HomePage />);
    
    // Check navigation links exist with correct href attributes (in navigation bar specifically)
    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '#services');
    expect(screen.getByRole('link', { name: /investment/i })).toHaveAttribute('href', '#investment');
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#market');
    
    // Check for the navigation contact link specifically
    const navContactLink = screen.getAllByRole('link', { name: /contact/i }).find(
      link => link.getAttribute('href') === '#contact'
    );
    expect(navContactLink).toBeInTheDocument();
    expect(navContactLink).toHaveAttribute('href', '#contact');
  });

  test('investment details button scrolls to investment section', async () => {
    const user = userEvent.setup();
    render(<HomePage />);
    
    // Find the "View Investment Details" button
    const investmentButton = screen.getByRole('button', { name: /view investment details/i });
    
    // Mock getElementById to return an element
    const mockElement = { scrollIntoView: jest.fn() };
    global.document.getElementById = jest.fn().mockReturnValue(mockElement);
    
    await user.click(investmentButton);
    
    // Check that getElementById and scrollIntoView were called
    await waitFor(() => {
      expect(document.getElementById).toHaveBeenCalledWith('investment');
      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  test('investment form displays correct investment amount', () => {
    render(<HomePage />);
    
    // Check that $100,000 Investment is displayed
    expect(screen.getByText('$100,000 Investment')).toBeInTheDocument();
    expect(screen.getByText(/strategic capital allocation/i)).toBeInTheDocument();
  });

  test('form includes proper security measures', () => {
    render(<HomePage />);
    
    // Check for honeypot field (anti-spam)
    const honeypotField = screen.getByLabelText(/don't fill this out if you're human/i);
    expect(honeypotField).toHaveAttribute('name', 'bot-field');
    
    // Check that honeypot is hidden
    expect(honeypotField.closest('p')).toHaveAttribute('hidden');
  });

  test('privacy policy link is present in form and footer', () => {
    render(<HomePage />);
    
    // Check for privacy policy links
    const privacyLinks = screen.getAllByRole('link', { name: /privacy policy/i });
    expect(privacyLinks.length).toBeGreaterThan(0);
    
    // At least one should link to /privacy
    const privacyPolicyLink = privacyLinks.find(link => 
      link.getAttribute('href') === '/privacy'
    );
    expect(privacyPolicyLink).toBeInTheDocument();
  });
});