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

    cy.get('.admin-news-card').first().should('include', 'В архиве');
    cy.get(`.admin-btn-change`).first().click();
    cy.url().should('include', 'admin/news/');

    cy.get('.admin-status_lable').should('include', 'В архиве');
    cy.get('.admin-status_lable').click();
    cy.get('.admin-status_lable').should('have.css', 'background-color: #84DA82');

    cy.get('.admin-btn__type_arrow[type="submit"]').first().click();
    cy.get('.admin-btn__type_arrow[type="submit"]').first().should('have.class', 'load');
    cy.get('.admin-btn__type_arrow[type="submit"]').first().should('have.class', 'good');

    cy.get('.admin-header__link[href="/admin/news"]').click();
    cy.get('.admin-news-card').first().should('include', 'На сайте');
  });
});
