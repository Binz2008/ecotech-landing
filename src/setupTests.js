import '@testing-library/jest-dom'

// Mock i18next for tests
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      language: 'en',
      changeLanguage: jest.fn()
    }
  })
}));