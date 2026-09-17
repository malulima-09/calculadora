describe ('Calculadora', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000").wait(1000);
  });

  it("Soma Correta", () => {
    cy.get('[data-cy="num1"').type("10").wait(1000);
    cy.get('[data-cy="num2"').type("5").wait(1000);
    cy.get('[data-cy="add"').click().wait(1000);
    cy.get('[data-cy="result"').should("contain","15");
    
  })
})