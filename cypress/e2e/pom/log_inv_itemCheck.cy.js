import LoginPage from '../../support/pageObject/page/LoginPage';
import InventoryPage from '../../support/pageObject/page/InventoryPage';
import ItemPage from '../../support/pageObject/page/ItemPage';
import credentials from '../../fixtures/credentials.json';


describe('SauceDemo Tests', () => {
    beforeEach(() => {
        Cypress.config(); 
    });

    it('Login Page Tests with Correct Credentials', () => {
        LoginPage.open();
        LoginPage.login(credentials.userNames.correctUserName, credentials.passwords.correctPassword);

        
        cy.url().should('eq', `${Cypress.env('BASE_URL')}/inventory.html`);
    });

    it('Login Page Tests with Incorrect Credentials', () => {
        LoginPage.open();
        LoginPage.login(credentials.userNames.incorrectUserName, credentials.passwords.incorrectPassword);

        
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service'); // Убедитесь, что текст сообщения совпадает
    });

    it('Inventory Page Tests', () => {
        
        LoginPage.open();
        LoginPage.login(credentials.userNames.correctUserName, credentials.passwords.correctPassword);
        cy.url().should('eq', `${Cypress.env('BASE_URL')}/inventory.html`);
        cy.wait(1000);

        InventoryPage.checkUIElements();
        InventoryPage.checkDropdownOptions();
       
    });

    it('Item Page Tests', () => {
        
        LoginPage.open();
        LoginPage.login(credentials.userNames.correctUserName, credentials.passwords.correctPassword);

        InventoryPage.clickOnItem(0); 

        ItemPage.checkItemDetails(); 
        ItemPage.addToCart(); 
        ItemPage.removeFromCart(); 
    });
});

