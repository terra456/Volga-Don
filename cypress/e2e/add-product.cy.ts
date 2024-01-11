describe('Login and add article', () => {
  it('Open login page and login', () => {
    cy.visit('http://localhost:5173/admin/');

    // Should be on a new URL which
    cy.url().should('include', '/login');

    // Get an input, type into it
    cy.get('.admin-registration__input_type_login').type('admin');
    cy.get('.admin-registration__input_type_password').type('123');

    cy.get('.admin-registration__btn').click();

    cy.url().should('include', '/admin');

    cy.get('.admin-add-card_type_catalog').click();
    cy.url().should('include', 'admin/products/add');

    const filepath = './cypress/img/2.jpg';
    cy.get('.admin-add-card').selectFile(filepath);
    cy.get('.admin-add-catalog__add-photo').should('be.visible');

    cy.get('input[name="name"]').type('TEST cypress');
    cy.get('textarea[name="description"]').type(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    );

    cy.get('.admin-btn_type_white').first().click();
    cy.get('.admin-btn_type_white').first().should('have.class', 'load');
    cy.get('.admin-btn_type_white').first().should('have.class', 'good');
  });
});
