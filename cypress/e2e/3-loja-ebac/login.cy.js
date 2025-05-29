/// <reference types="cypress"/>

describe('Funcionalidade Login', () =>{

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});
afterEach(() => {
    cy.screenshot()
    
});
it('deve fazer login com sucesso', () => {
    cy.get('#username').type('luiz@teste.com.br')
    cy.get('#password').type('Leste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)'). should('contain' , 'Olá, luiz (não é luiz? Sair)' )
    
})
it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
    cy.get('#username').type('leste@teste.com.br')
    cy.get('#password').type('Leste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error'). should('contain' , 'Endereço de e-mail desconhecido')
    cy.get('.woocommerce-error'). should('exist')
});
it('Deve exibir uma mensagem de erro ao inserir senha invalida ', () => {
    cy.get('#username').type('luiz@teste.com.br')
    cy.get('#password').type('Luiz@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error'). should('contain' , 'Erro: A senha fornecida para o e-mail luiz@teste.com.br está incorreta.')
    cy.get('.woocommerce-error'). should('exist')
});
})