import {signIn} from '../../support/auth'


describe('Api Tests with cypress-plugin-api', () => {
  beforeEach(() => {
    signIn();
   
  });

  it('should return car models with correct stucture', () => {
    cy.api({
      method: 'GET',
      url: 'https://qauto.forstudy.space/api/cars/models',
      headers: {
        Cookie: `sid=${Cypress.env('sid')}`  
      }
    }).then((response) => {
      expect(response.status).to.eq(200);  
      expect(response.body).to.have.property('data'); 
      expect(response.body.data).to.be.an('array') 

      //Кожна модель має правильну структуру
      response.body.data.forEach((model) => {
        expect(model).to.have.all.keys('carBrandId','title','id');
        expect(model.id).to.be.a('number');
        expect(model.title).to.be.a('string');
        expect(model.carBrandId).to.be.a('number');
      })
    
    });
  });


it('should create a new car and verify its data', () => {
    const carData = {
      carBrandId: '2',
      carModelId: '8',
      mileage: 15000
     
    };

    cy.api({
      method: 'POST',
      url: 'https://qauto.forstudy.space/api/cars',
      headers: {
        Cookie: `sid=${Cypress.env('sid')}`  
      },
      body: carData  
    }).then((response) => {
      expect(response.status).to.eq(201);  
      expect(response.body.data).to.have.property('id');

      const createdCar = response.body.data;
      expect(createdCar).to.have.property('carBrandId', carData.carBrandId);
      expect(createdCar).to.have.property('carModelId', carData.carModelId);
      expect(createdCar).to.have.property('mileage', carData.mileage);
       
       
    });
  });
  

it('should delete a car and verify its no longer exists', () => {
      const carId = 201186;  
      
  
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
