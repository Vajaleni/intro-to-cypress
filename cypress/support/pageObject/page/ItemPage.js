/// <reference types="cypress" />

import BasePage from "./BasePage";

class ItemPage extends BasePage {

    get itemName() {
        return cy.get('.inventory_details_name'); // Селектор для названия товара
    }

    get itemDescription() {
        return cy.get('.inventory_details_desc'); // Селектор для описания товара
    }

    get itemPrice() {
        return cy.get('.inventory_details_price'); // Селектор для цены товара
    }

    get addToCartButton() {
        return cy.get('.btn_primary'); // Селектор для кнопки "Добавить в корзину"
    }

    get removeFromCartButton() {
        return cy.get('.btn_secondary'); // Селектор для кнопки "Удалить из корзины"
    }

    checkItemDetails() {
        // Проверим наличие всех деталей товара
        this.itemName.should('be.visible');
        this.itemDescription.should('be.visible');
        this.itemPrice.should('be.visible');
    }

    addToCart() {
        this.addToCartButton.click(); // Добавляем товар в корзину
    }

    removeFromCart() {
        this.removeFromCartButton.click(); // Убираю товар из корзины
    }
}

export default new ItemPage();

