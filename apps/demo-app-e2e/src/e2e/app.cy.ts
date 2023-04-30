describe('demo-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('span').contains('How to get Cypress working with MSW');
  });
});
