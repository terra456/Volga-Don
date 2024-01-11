describe('Login and add article', () => {
  it('Open login page and login', () => {
    cy.visit('http://localhost:5173/admin/');

    // Should be on a new URL which
    cy.url().should('include', '/login');

    // cy.contains('type').click();

    // Get an input, type into it
    cy.get('.admin-registration__input_type_login').type('admin');
    cy.get('.admin-registration__input_type_password').type('123');

    //  Verify that the value has been updated
    cy.get('.admin-registration__input_type_login').should('have.value', 'admin');
    cy.get('.admin-registration__input_type_password').should('have.value', '123');

    cy.get('.admin-registration__btn').click();

    cy.url().should('include', '/admin');
  });
});
