/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    it('deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
        .first()
        .click()
        cy.get('#tab-title-description > a'). should('contain' , 'Descrição')
    });
    it('Deve selecionar o produto da lista procurando pelo nome', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a'). should('contain' , 'Descrição')
    });
    it.only('deve buscar um produto com  sucesso usando o buscador', () => {
        let produto ='Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });
    it('deve vistar a pagina do produto', () => {
        
    });
    it('deve adicionar o produto ao carrinho ', () => {
        
    });
});