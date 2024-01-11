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

    // Add new news
    cy.get('.admin-add-card_type_news').click();
    cy.url().should('include', 'admin/news/add');

    const filepath = './cypress/img/1.jpg';
    cy.get('.admin-add-card').selectFile(filepath);
    cy.get('.image').should('be.visible');

    cy.get('input[name="title"]').type('TEST cypress');
    cy.get('textarea[name="text"]').type(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    );

    cy.get('.admin-btn_type_white').first().click();
    cy.get('.admin-btn_type_white').first().should('have.class', 'load');
    cy.get('.admin-btn_type_white').first().should('have.class', 'good');
  });
});
