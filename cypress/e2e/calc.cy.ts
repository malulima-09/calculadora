describe('Calculadora', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000").wait(1000);
  });

  it("Soma correta", () => {
    cy.get('[data-cy="num1"').type("10").wait(1000);
    cy.get('[data-cy="num2"').type("5").wait(1000);
    cy.get('[data-cy="add"').click().wait(1000);
    cy.get('[data-cy="result"]').should("contain", "15");
  });

  it("Subtração correta", () => {
    cy.get('[data-cy="num1"]').type("10").wait(1000);
    cy.get('[data-cy="num2"]').type("5").wait(1000);
    cy.get('[data-cy="sub"]').click().wait(1000);
    cy.get('[data-cy="result"]').should("contain", "5");
  });

  it("Multiplicação correta", () => {
    cy.get('[data-cy="num1"]').type("10").wait(1000);
    cy.get('[data-cy="num2"]').type("5").wait(1000);
    cy.get('[data-cy="mul"]').click().wait(1000);
    cy.get('[data-cy="result"]').should("contain", "50");
  });

  it("Divisão correta", () => {
    cy.get('[data-cy="num1"]').type("10").wait(1000);
    cy.get('[data-cy="num2"]').type("5").wait(1000);
    cy.get('[data-cy="div"]').click().wait(1000);
    cy.get('[data-cy="result"]').should("contain", "2");
  });
});