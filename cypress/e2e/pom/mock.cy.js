import LoginPage from '../../support/pageObject/page/LoginPage';
import InventoryPage from '../../support/pageObject/page/InventoryPage';
import ItemPage from '../../support/pageObject/page/ItemPage';
import credentials from '../../fixtures/credentials.json';

describe('SauceDemo Tests', () => {
    beforeEach(() => {
       
        cy.intercept('POST', '/api/login', {
            statusCode: 200,
            body: {
                token: 'mocked-token',
                user: {
                    username: 'standard_user',
                }
            }
        }).as('loginRequest');

        cy.intercept('GET', '/api/inventory', {
            statusCode: 200,
            body: [
                {
                    id: 1,
                    name: 'Item 1',
                    description: 'Description for item 1',
                    price: '9.99',
                },
                {
                    id: 2,
                    name: 'Item 2',
                    description: 'Description for item 2',
                    price: '14.99',
                }
            ]
        }).as('inventoryRequest');
    });

    it('Login Page Tests with Correct Credentials', () => {
        LoginPage.open();
        LoginPage.login(credentials.userNames.correctUserName, credentials.passwords.correctPassword);
        
       
        cy.wait('@loginRequest');

        cy.url().should('eq', `${Cypress.env('BASE_URL')}/inventory.html`);
    });

})