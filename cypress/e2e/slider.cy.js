describe('Check carousel', () => {
  it('Title and desc should be visible for each card in carousel', () => {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible');
    
    cy.get('.swiper-slide-visible').should('be.visible')
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});