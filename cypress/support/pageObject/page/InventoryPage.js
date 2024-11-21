/// <reference types="cypress" />

import BasePage from "./BasePage";

class InventoryPage extends BasePage {

   get inventoryItems() {
       return cy.get('#inventory_container').should('exist'); // Селектор айтемов
   }

   get cartButton() {
       return cy.get('.shopping_cart_link'); // Селектор для кнопки корзины
   }

   get dropdownMenu() {
       return cy.get('.product_sort_container'); // Селектор для выпадающего списка
   }

   checkUIElements() {
       // Проверяю наличие всех необходимых UI элементов на странице
       this.inventoryItems.should('have.length.greaterThan', 0); // хотя бы один элемент есть
       this.cartButton.should('be.visible'); // кнопка корзины видима
       this.dropdownMenu.should('be.visible'); // выпадающее меню видимо
   }

   checkDropdownOptions() {
       // Проверяю, что выпадающее меню содержит нужные опции
      
        
        this.dropdownMenu.select('Name (A to Z)').should('have.value', 'az');
    
        // Разбиваем цепочку: выбираем опцию, затем повторно проверяем элемент
        this.dropdownMenu.select('Price (low to high)');
        this.dropdownMenu.should('have.value', 'lohi');
    }
    
    goToCart() {
       this.cartButton.click(); // Клик по кнопке корзины
   }

   // Добавлен метод для клика по элементу по его id
   clickOnItemById(itemId) {
       cy.get(`#${itemId}`).click(); // Клик по элементу с определённым id
   }

   // Старый метод с уточнённым селектором
   clickOnItem(index) {
       // Клик по элементу инвентаря с указанным индексом
       this.inventoryItems.eq(index).find('#item_4_img_link > img').first().click(); // Найти первую ссылку и кликнуть
   }
}

export default new InventoryPage();


