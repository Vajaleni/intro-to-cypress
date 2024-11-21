describe('Header and Footer Buttons', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
  
});
  
    it ('Find all buttons in the header', () => {
        cy.get('header').find('button')
    })

    it('Find all buttons', () => {
      cy.get('.header-link.-guest').should('exist');   
      cy.get('.btn.btn-outline-white.header_signin').should('exist');   
      cy.get('.hero-descriptor_btn.btn.btn-primary').should('exist');   
    })
  
  
    it('Find all icons in the footer', () => {
      cy.get('a[href*="facebook.com"]').should('exist');   
      cy.get('a[href*="t.me"]').should('exist');   
      cy.get('a[href*="linkedin.com"]').should('exist');   
      cy.get('a[href*="instagram.com"]').should('exist');  
      cy.get('a[href*="youtube.com"]').should('exist')
    })

    it('Find all links in the footer', () => {
      cy.get('.contacts_link.display-4').should('exist');  
      cy.get('.contacts_link.h4').should('exist')
        })
  });
  