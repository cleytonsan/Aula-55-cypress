/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

// VISITANDO O SITE E ENCONTRANDO UM TEXTO
describe('should test a functional level', () =>{
    //BEFORE ALL EXECULTARA TUDO QUE ESTÁ DENTRO DELE ANTES DE COMEÇAR OS TESTES
    before(() => {
        cy.login('cleytonsantos087@gmail.com', 'cleyton123')
        cy.resetApp()
        
        // cy.visit('https://barrigareact.wcaquino.me/')
        // cy.get(loc.LOGIN.USER).type('cleytonsantos087@gmail.com')
        // cy.get(loc.LOGIN.PASSWORD).type('cleyton123')
        // cy.get(loc.LOGIN.BUTTON).click()
        // cy.get(loc.MESSAGE).should('contain','Bem vindo')

    })
    
    it('should create as account',() => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste')

        // cy.get(loc.MENU.SETTINGS).click()
        // cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta de teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click() 
        cy.get(loc.MESSAGE).should('contain','Conta inserida com sucesso!')

    })


    it('Should update an account',() => {
        cy.acessarMenuConta()

        // cy.get(loc.MENU.SETTINGS).click()
        // cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada')

        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain','Conta atualizada com sucesso!')
    })

    it('Should not create an account with same name',() =>{
        cy.get(loc.MENU.SETTINGS).click()

        cy.get(loc.CONTAS.NOME).type('Conta de teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain','code 400')
    })

})