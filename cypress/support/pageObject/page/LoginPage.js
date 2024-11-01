/// <reference types="cypress" />

import BasePage from "./BasePage";

class LoginPage extends BasePage {

    get userNameField() {
        return cy.get('[data-test="username"]', {timeout: 10000});
    }

    get passwordField() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('#login-button');
    }

    get errorMSG() {
        return cy.get('[data-test="error"]');
    }

    open() {
        super.open('/'); // Переход на главную страницу
    }

    login(username, password) {
        this.userNameField.type(username); 
        this.passwordField.type(password);
        this.loginButton.click();
    }

    verifyErrorMessage(text) {
        this.errorMSG.should('have.text', text);
    }
}


export default new LoginPage();
