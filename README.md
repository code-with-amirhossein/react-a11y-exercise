# React Accessibility Exercise

This project is a hands-on exercise for improving accessibility in React applications. It's part of the [Accessibility for React Developers](https://code-with-amirhossein.github.io/a11y-for-react-devs/) knowledge sharing.

## Overview

The application is a simple profile management tool that allows users to:
- View their profile information
- Edit their name and profile picture
- Clear their profile information

While the application works functionally, it has several accessibility issues that need to be fixed. Your task is to identify and resolve these issues to make the application accessible to all users, including those who use assistive technologies like screen readers.

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```

## Exercise Instructions

Search for `@todo` comments throughout the codebase. These comments provide hints about accessibility issues that need to be fixed.

## Accessibility Tools

To help identify and fix accessibility issues, consider using:

- [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) - Chrome extension for accessibility testing
- Browser developer tools (Accessibility tab)
- Screen readers like VoiceOver (macOS), NVDA or JAWS (Windows)

## Learning Resources

For guidance on fixing these accessibility issues, refer to:

- [Accessibility for React Developers](https://code-with-amirhossein.github.io/a11y-for-react-devs/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [React accessibility documentation](https://reactjs.org/docs/accessibility.html)

## Common Accessibility Issues to Address

1. Semantic HTML: Using appropriate HTML elements (buttons, headings, etc.)
2. Keyboard navigation: Ensuring all interactive elements are keyboard accessible
3. Screen reader announcements: Making dynamic content changes perceivable
4. Focus management: Properly managing focus, especially in modals
5. Form labeling: Ensuring form controls have proper labels
6. Color contrast: Ensuring text is readable against its background
7. Image accessibility: Adding alt text to images
8. ARIA attributes: Using ARIA roles, states, and properties correctly

## Completion Criteria

Your implementation should:

1. Pass automated accessibility checks using axe DevTools
2. Be fully navigable using only a keyboard
3. Be usable with a screen reader
4. Maintain all existing functionality while improving accessibility

Good luck, and happy coding!
