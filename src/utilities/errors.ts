export class MissingAppProviderError extends Error {
  constructor(message = '') {
    super(
      `${message ? `${message} ` : message
      }Your application must be wrapped in an <AppProvider> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-appprovider--page for implementation instructions.`,
    );
    this.name = 'MissingAppProviderError';
  }
}
