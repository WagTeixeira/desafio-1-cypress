/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

context('Funcionalidade Pré Cadastro', ()=> {
    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    }); ///visita a mesma URL antes cada teste

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeAleatorio = faker.name.firstName()
        let sobrenomeAleatorio = faker.name.lastName()
        let emailAleatorio = faker.internet.email(nomeAleatorio)

        cy.get('#reg_email').type(emailAleatorio)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeAleatorio)
        cy.get('#account_last_name').type(sobrenomeAleatorio)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});