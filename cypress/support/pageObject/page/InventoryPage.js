/// <reference types="cypress" />

import BasePage from "./BasePage";

class InventoryPage extends BasePage {

    get inventoryItems() {
        return cy.get('.inventory_item'); // Селектор  айтемов 
    }

    get cartButton() {
        return cy.get('.shopping_cart_link'); // Селектор для кнопки корзины
    }

    get dropdownMenu() {
        return cy.get('.product_sort_container'); // Селектор для выпадающего списка 
    }

    checkUIElements() {
        // Проверяю наличие всех необходимых UI элементов на странице
        this.inventoryItems.should('have.length.greaterThan', 0); //  хотя бы один элемент есть
        this.cartButton.should('be.visible'); // кнопка корзины видима
        this.dropdownMenu.should('be.visible'); // выпадающее меню видимо
    }

    checkDropdownOptions() {
        // Проверяю, что выпадающее меню содержит нужные опции
        this.dropdownMenu.select('Name (A to Z)').should('have.value', 'az');
        this.dropdownMenu.select('Price (low to high)').should('have.value', 'lohi');
    }

    goToCart() {
        this.cartButton.click(); // Клик по кнопке корзины
    }

    clickOnItem(index) {
        // Клик по элементу инвентаря с указанным индексом
        this.inventoryItems.eq(index).find('a').click();
    }
}

export default new InventoryPage();



