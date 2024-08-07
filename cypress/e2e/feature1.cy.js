

describe('feature-1 testing',()=>{

    it.only('TestCase-1 for feature-1', ()=>{
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').should('be.visible');
        cy.get('[data-test="login-button"]').click();
       
        //cy.get('.app_logo').should('be.visible').debug();
        cy.get('.app_logo').should('be.visible');
        cy.get('[data-test="secondary-header"]').click();
        cy.get('[data-test="title"]').should('be.visible');
        cy.get('#react-burger-menu-btn').should('be.visible');
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="inventory-sidebar-link"]').should('have.text', 'All Items');
        cy.get('[data-test="about-sidebar-link"]').should('have.text', 'About');
        cy.get('[data-test="logout-sidebar-link"]').should('have.text', 'Logout');
        cy.get('[data-test="reset-sidebar-link"]').should('have.text', 'Reset App State');
        cy.get('#react-burger-cross-btn').click();
        cy.get('[data-test="social-twitter"]').should('be.visible');
        cy.get('[data-test="social-facebook"]').should('be.visible');
        cy.get('[data-test="social-linkedin"]').should('be.visible');
        /* ==== End Cypress Studio ==== */
    } )


})