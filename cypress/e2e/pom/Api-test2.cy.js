import {signIn} from '../../support/auth'


describe('Api Tests with cypress-plugin-api', () => {
  beforeEach(() => {
    signIn();
   
  });
  it('should delete a car and verify its no longer exists', () => {
    const carId = 201170;  
    

    cy.api({
      method: 'DELETE',
      url: `https://qauto.forstudy.space/api/cars/${carId}`,
      headers: {
        Cookie: `sid=${Cypress.env('sid')}`   
      }
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('status', 'ok');
    });


    
    
    
    cy.api({
      method: 'DELETE',
      url: `https://qauto.forstudy.space/api/cars/${carId}`,
      headers: {
        Cookie: `sid=${Cypress.env('sid')}`   
      },
      failOnStatusCode: false
  }).then((secondResponse)  => {
    expect(secondResponse.status).to.eq(404);
    expect(secondResponse.body).to.have.property('status', 'error');
  });
  
});
});
