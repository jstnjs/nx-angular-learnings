import { getGreeting } from '../support/app.po';

describe('demo-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('p').contains("home works!");
  });
});
