/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });
    it('deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
        .first()
        .click()
        cy.get('#tab-title-description > a'). should('contain' , 'Descrição')
    });
});