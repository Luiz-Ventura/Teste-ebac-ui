/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('Funcionalidade Login', () =>{

beforeEach(() => {
    cy.visit('minha-conta')
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
it('Deve fazer login com sucesso - usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)'). should('contain' , 'Olá, luiz (não é luiz? Sair)' )
});
it('Deve fazer login com sucesso - usando Fixture', () => {
    cy.fixture('perfil').then( dados => {
       cy.get('#username').type(dados.usuario, {log: false})
       cy.get('#password').type(dados.senha, {log: false})
       cy.get('.woocommerce-form > .button').click()
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)'). should('contain' , 'Olá, luiz (não é luiz? Sair)' )
    })
});
it.only('Deve fazer login com sucesso usando comando customizados', () => {
    cy.login('luiz@teste.com.br' , 'Leste@123' )
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)'). should('contain' , 'Olá, luiz (não é luiz? Sair)' )
});
})