/// <reference types="cypress"/>

describe('Funcionalidade Login', () =>{

it('deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('luiz@teste.com.br')
    cy.get('#password').type('Leste@123')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)'). should('contain' , 'Olá, luiz (não é luiz? Sair)' )
    
})

})