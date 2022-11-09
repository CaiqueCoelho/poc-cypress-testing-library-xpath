

describe("Using Cypress Testing Library", () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it("Get elements using role", () => {
        cy.findByRole('textbox').clear().type('Guiratinga');
        cy.findByRole('button').click();
        cy.findByRole('layout', { id: "best-time" }).should('be.visible');
        cy.findByRole('text', { id: "best-hour" }).should('be.visible').and('contain.text', 'horas');
        cy.findByRole('paragraph', { id: "best-temperature" }).should('be.visible').and('contain.text', 'temperatura');
    });

    it("Get elements using data-testid attribute", () => {
        cy.findByTestId('input-city').clear().type('Guiratinga');
        cy.findByTestId('search-time').click();
        cy.findByTestId('best-time').should('be.visible');
        cy.findByTestId('best-hour').should('be.visible').and('contain.text', 'horas');
        cy.findByTestId('best-temperature').should('be.visible').and('contain.text', 'temperatura');
    });

    it("Get elements using text", () => {
        cy.findByDisplayValue('São Paulo').clear().type('Guiratinga');
        cy.findByText('Buscar melhor horário').click();
        cy.findByText('O melhor horário para você tomar seu banho hoje é:').should('be.visible');
        cy.findByText(/horas/i).should('be.visible')
        cy.findByText(/temperatura/i).should('be.visible')
    });

    it.skip("Get hidden button by data test id and try click", () => {
        cy.findByTestId('hidden-button').click();
    })

    it.skip("Get hidden button by text id and try click", () => {
        cy.findByText('Be a climate hero!').click();
    })

})