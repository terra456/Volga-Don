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

    const filepath = './cypress/img/2.jpg';
    cy.get('.admin-btn__change-foto').selectFile(filepath);
    cy.get('.image').should('be.visible');

    cy.get('input[name="title"]').type('Change title');
    cy.get('textarea[name="text"]').type('Lorem ipsum dolor sit amet.');

    cy.get('.admin-btn__type_arrow[type="submit"]').first().click();
    cy.get('.admin-btn__type_arrow[type="submit"]').first().should('have.class', 'load');
    cy.get('.admin-btn__type_arrow[type="submit"]').first().should('have.class', 'good');
  });
});
