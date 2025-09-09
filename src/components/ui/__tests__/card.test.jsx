import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '../card';

describe('Card Components', () => {
  describe('Card', () => {
    test('renders card with default classes', () => {
      render(<Card data-testid="card">Card content</Card>);
      const card = screen.getByTestId('card');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('bg-card', 'text-card-foreground', 'rounded-xl', 'border', 'shadow-sm');
      expect(card).toHaveAttribute('data-slot', 'card');
    });

    test('applies custom className', () => {
      render(<Card className="custom-class" data-testid="card">Content</Card>);
      const card = screen.getByTestId('card');
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('CardHeader', () => {
    test('renders header with correct classes', () => {
      render(<CardHeader data-testid="header">Header content</CardHeader>);
      const header = screen.getByTestId('header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveAttribute('data-slot', 'card-header');
    });
  });

  describe('CardTitle', () => {
    test('renders title with semantic meaning', () => {
      render(<CardTitle>Test Title</CardTitle>);
      const title = screen.getByText('Test Title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('leading-none', 'font-semibold');
      expect(title).toHaveAttribute('data-slot', 'card-title');
    });
  });

  describe('CardDescription', () => {
    test('renders description with muted styling', () => {
      render(<CardDescription>Test description</CardDescription>);
      const description = screen.getByText('Test description');
      expect(description).toBeInTheDocument();
      expect(description).toHaveClass('text-muted-foreground', 'text-sm');
      expect(description).toHaveAttribute('data-slot', 'card-description');
    });
  });

  describe('CardContent', () => {
    test('renders content with padding', () => {
      render(<CardContent data-testid="content">Content here</CardContent>);
      const content = screen.getByTestId('content');
      expect(content).toBeInTheDocument();
      expect(content).toHaveClass('px-6');
      expect(content).toHaveAttribute('data-slot', 'card-content');
    });
  });

  describe('CardFooter', () => {
    test('renders footer with flex layout', () => {
      render(<CardFooter data-testid="footer">Footer content</CardFooter>);
      const footer = screen.getByTestId('footer');
      expect(footer).toBeInTheDocument();
      expect(footer).toHaveClass('flex', 'items-center', 'px-6');
      expect(footer).toHaveAttribute('data-slot', 'card-footer');
    });
  });

  describe('CardAction', () => {
    test('renders action area with grid positioning', () => {
      render(<CardAction data-testid="action">Action button</CardAction>);
      const action = screen.getByTestId('action');
      expect(action).toBeInTheDocument();
      expect(action).toHaveClass('col-start-2', 'row-span-2');
      expect(action).toHaveAttribute('data-slot', 'card-action');
    });
  });

  describe('Complete Card', () => {
    test('renders full card structure', () => {
      render(
        <Card data-testid="complete-card">
          <CardHeader>
            <CardTitle>Investment Opportunity</CardTitle>
            <CardDescription>EcoTech UAE environmental services</CardDescription>
            <CardAction>
              <button>Learn More</button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Join our $100K investment opportunity in sustainable business.</p>
          </CardContent>
          <CardFooter>
            <button>Contact Us</button>
          </CardFooter>
        </Card>
      );

      expect(screen.getByTestId('complete-card')).toBeInTheDocument();
      expect(screen.getByText('Investment Opportunity')).toBeInTheDocument();
      expect(screen.getByText('EcoTech UAE environmental services')).toBeInTheDocument();
      expect(screen.getByText('Join our $100K investment opportunity in sustainable business.')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Contact Us' })).toBeInTheDocument();
    });
  });
});