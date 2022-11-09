import '@testing-library/cypress/add-commands'
require('cypress-xpath');

Cypress.Commands.add('getByDataTestId', (selector, ...args) => {
    return cy.get(`[data-testid="${selector}"]`, ...args)
  })