/// <reference types="Cypress" />

beforeEach('Login into application', () => {

cy.visit("https://www.saucedemo.com/");
})

describe('Automation demo', () => {
  it('Login test scenario', () => {
    cy.visit("https://www.saucedemo.com/");
  })

  it('validate features', () => {
    cy.get("div[class='login_logo']").should('have.text','Swag Labs');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="username"]').clear('s');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="username"]').should('have.value','standard_user');
    cy.get('[data-test="password"]').clear('s');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="password"]').should('have.value','secret_sauce');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.get('[data-test="login-credentials"] > h4').should('have.text', 'Accepted usernames are:');
    cy.get('[data-test="login-password"] > h4').should('have.text', 'Password for all users:');
    cy.get('[data-test="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })

})