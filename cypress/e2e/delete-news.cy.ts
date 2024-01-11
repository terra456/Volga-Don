describe('Login and add article', () => {
  it('Open login page and login', () => {
    cy.visit('http://localhost:5173/admin/');

    // Should be on a new URL which
    cy.url().should('include', '/login');

    cy.get('.admin-registration__input_type_login').type('admin');
    cy.get('.admin-registration__input_type_password').type('123');

    cy.get('.admin-registration__btn').click();

    cy.url().should('include', '/admin');

    cy.get('.admin-header__link[href="/admin/news"]').click();

    cy.get(`.admin-btn-change`).first().click();
    cy.url().should('include', 'admin/news/');

    cy.get('.admin-btn__type_delete').click();
    cy.intercept('DELETE', '/articles/admin/').as('apiDel');
    cy.wait('@apiDel').should('have.property', 'response.statusCode', 204);
    cy.url().should('include', '/news');
  });
});
