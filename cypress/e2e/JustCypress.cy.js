describe("Just using Cypress", () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it("Get elements using id", () => {
        cy.get('#input-city').clear().type('Guiratinga');
        cy.get('#search-time').click();
        cy.get('#best-time').should('be.visible');
        cy.get('#best-hour').should('be.visible').and('contain.text', 'horas');
        cy.get('#best-temperature').should('be.visible').and('contain.text', 'temperatura');
    });

    it("Get elements using data-testid attribute", () => {
        cy.getByDataTestId('input-city').clear().type('Guiratinga');
        cy.getByDataTestId('search-time').click();
        cy.getByDataTestId('best-time').should('be.visible');
        cy.getByDataTestId('best-hour').should('be.visible').and('contain.text', 'horas');
        cy.getByDataTestId('best-temperature').should('be.visible').and('contain.text', 'temperatura');
    });

    it("Get elements using text", () => {
        cy.contains('Qual cidade você está?').parent().find('input').clear().type('Guiratinga');
        cy.contains('Buscar melhor horário').click();
        cy.contains('O melhor horário para você tomar seu banho hoje é:').should('be.visible');
        cy.contains('horas').should('be.visible')
        cy.contains('temperatura').should('be.visible')
    });

    it.skip("Get hidden button by data test id and try click", () => {
        cy.getByDataTestId('hidden-button').click();
    })

    it.skip("Get hidden button by text id and try click", () => {
        cy.contains('Be a climate hero!').click();
    })

})