/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

context('Funcionalidade Login', ()=> {
    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    }); ///visita a mesma URL antes cada teste 
    
    afterEach(()=>{
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {   
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    });
    
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        let emailAleatorio = faker.internet.email()

        cy.get('#username').type(emailAleatorio)
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
        
    }); //Adicionei o faker aqui para deixar os emails diferentes 

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        let senhaAleatorio = faker.internet.password()

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type(senhaAleatorio)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?') 
    }); //Adicionei o faker de senha como teste
});