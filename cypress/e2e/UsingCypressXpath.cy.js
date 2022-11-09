import { qase } from "cypress-qase-reporter/dist/mocha"

describe("Using Cypress Xpath", () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it("Get elements using id", () => {
        cy.xpath('//*[@id="input-city"]').clear().type('Guiratinga');
        cy.xpath('//*[@id="search-time"]').click()
        cy.xpath('//*[@id="best-time"]').should('be.visible');
        cy.xpath('//*[@id="best-hour"]').should('be.visible').and('contain.text', 'horas');
        cy.xpath('//*[@id="best-temperature"]').should('be.visible').and('contain.text', 'temperatura');
    });

    it("Get elements using data-testid attribute", () => {
        cy.xpath('//*[@data-testid="input-city"]').clear().type('Guiratinga');
        cy.xpath('//*[@data-testid="search-time"]').click()
        cy.xpath('//*[@data-testid="best-time"]').should('be.visible');
        cy.xpath('//*[@data-testid="best-hour"]').should('be.visible').and('contain.text', 'horas');
        cy.xpath('//*[@data-testid="best-temperature"]').should('be.visible').and('contain.text', 'temperatura');
    });

    it("Get elements using text", () => {
        cy.xpath('//input[@value="São Paulo"]').clear().type('Guiratinga');
        cy.xpath('//*[text()[contains(.,"Buscar melhor horário")]]').click();
        cy.xpath('//*[text()[contains(.,"O melhor horário para você tomar seu banho hoje é")]]').should('be.visible');
        cy.xpath('//*[text()[contains(.,"horas")]]').should('be.visible');
        cy.xpath('//*[text()[contains(.,"temperatura")]]').should('be.visible');
    });

    it.skip("Get hidden button by data test id and try click", () => {
        cy.xpath('//*[@data-testid="hidden-button"]').click();
    })

    it.skip("Get hidden button by text id and try click", () => {
        cy.xpath('//*[text()[contains(.,"Be a climate hero!")]]').click();
    })

})