describe('My First Test', () => {
  it('Visits the Volga-Don on localhost', () => {
    cy.visit('http://localhost:5173');
    cy.contains('type');
    cy.url().should('include', '/commands/actions');
  });
});
