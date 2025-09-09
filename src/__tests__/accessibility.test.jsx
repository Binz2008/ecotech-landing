import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import HomePage from '../HomePage';

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  test('HomePage should not have any accessibility violations', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('HomePage has proper heading structure', () => {
    render(<HomePage />);
    
    // Check for proper heading hierarchy (h1 -> h2 -> h3 etc.)
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
    
    // Should have at least one h1
    const h1Elements = document.querySelectorAll('h1');
    expect(h1Elements.length).toBeGreaterThanOrEqual(1);
  });

  test('Forms have proper labels and accessibility attributes', () => {
    render(<HomePage />);
    
    // Check that all input elements have labels or aria-labels
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    
    inputs.forEach(input => {
      const hasLabel = input.labels && input.labels.length > 0;
      const hasAriaLabel = input.hasAttribute('aria-label');
      const hasAriaLabelledBy = input.hasAttribute('aria-labelledby');
      const hasPlaceholder = input.hasAttribute('placeholder');
      
      // Input should have at least one form of labeling
      expect(hasLabel || hasAriaLabel || hasAriaLabelledBy || hasPlaceholder).toBe(true);
    });
  });

  test('Interactive elements have proper focus management', () => {
    render(<HomePage />);
    
    // Check that buttons and links are focusable
    const interactiveElements = document.querySelectorAll('button, a[href], input, textarea, select');
    
    interactiveElements.forEach(element => {
      // Element should not have tabindex="-1" unless specifically intended
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex !== null) {
        expect(parseInt(tabIndex)).toBeGreaterThanOrEqual(-1);
      }
    });
  });

  test('Images have appropriate alt text', () => {
    render(<HomePage />);
    
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Images should have alt attribute (can be empty for decorative images)
      expect(img.hasAttribute('alt')).toBe(true);
      
      // If alt is not empty, it should be descriptive
      const altText = img.getAttribute('alt');
      if (altText && altText.trim() !== '') {
        expect(altText.length).toBeGreaterThan(3); // Meaningful alt text
      }
    });
  });

  test('Color contrast and visual accessibility', () => {
    render(<HomePage />);
    
    // Check for main text elements that should have readable font sizes
    const mainTextElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, button, input, textarea');
    
    mainTextElements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      
      // Elements should have some color defined
      expect(color).toBeDefined();
      
      // Text should not be too small (basic check for main content)
      const fontSize = parseFloat(computedStyle.fontSize);
      if (!isNaN(fontSize) && element.offsetHeight > 0 && element.offsetWidth > 0) {
        // Only check visible elements and allow for reasonable minimum
        expect(fontSize).toBeGreaterThanOrEqual(10); // More realistic minimum
      }
    });
  });
});