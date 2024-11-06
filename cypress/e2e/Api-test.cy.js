import {signIn} from '../support/auth'
describe('AUTH', () => {

  beforeEach(() => {
    signIn();
  })

  
  it('should return car models', () => {
    cy.request({
      method: 'GET',
      url: 'https://qauto.forstudy.space/api/cars/models',
      headers: {
        Cookie: `sid=${Cypress.env('sid')}`  
      }
    }).then((response) => {
      expect(response.status).to.eq(200);  
      expect(response.body).to.have.property('data');  
    });
  });

 
  it('should create a new car', () => {
    const carData = {
      carBrandId: '2',
      carModelId: '8',
      mileage: 15000
     
    };

    cy.request({
      method: 'POST',
      url: 'https://qauto.forstudy.space/api/cars',
      headers: {
        Cookie: `sid=${Cypress.env('sid')}`  
      },
      body: carData  
    }).then((response) => {
      expect(response.status).to.eq(201);  
      expect(response.body.data).to.have.property('id');
       
       
    });
  });

 
  it('should delete a car', () => {
    const carId = 201170;  

    cy.request({
      method: 'DELETE',
      url: `https://qauto.forstudy.space/api/cars/${carId}`,
      headers: {
        Cookie: `sid=${Cypress.env('sid')}`   
      }
    }).then((response) => {
      expect(response.status).to.eq(200); 
    });
  });
});
