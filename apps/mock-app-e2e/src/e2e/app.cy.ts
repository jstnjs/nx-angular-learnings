import { getGreeting } from '../support/app.po';

describe('mock-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('.js-test').contains('Akash');
  });
});
