describe('shared-ui-alert', () => {
  beforeEach(() => cy.visit('/iframe.html?id=alertcomponent--primary'));
  it('should render the component', () => {
    cy.get('jv-alert').should('exist');
  });
});
