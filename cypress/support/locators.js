const locators = {
    LOGIN:{
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BUTTON: '.btn'
    },

    MENU: {
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]'
    },

    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: '//table//td[contains(., "Conta teste")]/..//i[@class="far fa-edit"]'
    },

    MESSAGE: '.toast-message'
}

export default locators;