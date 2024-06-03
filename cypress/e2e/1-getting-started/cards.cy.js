describe("Home Page", () => {
  it("Renders main button", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="card-btn"]').should("be.visible");
  });

  // it("Hover main button and bg color changes", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get('[data-test-id="card-btn"]')
  //     .trigger("mouseover")
  //     .should("have.css", "background-color", "pink");
  // });

  it("Click main button and cards render in viewport", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="card-btn"]').click();
    cy.get('[data-test="card"]').should("be.visible");
  });

  it("Click main button and cards render in viewport", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="card-btn"]').click();
    cy.get('[data-test="cards"]').should("have.length.of.at.most", 4);
  });
});
