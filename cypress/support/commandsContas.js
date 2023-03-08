import loc from './locators'

cypress.commands.add('acessarMenuContas', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})

cypress.commands.add('inserirConta', conta => {
    cy.get(loc.CONTAS.NOME).type(conta)
    cy.get(loc.CONTAS.BTN_SALVAR).click()
})