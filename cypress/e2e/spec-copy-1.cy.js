describe('Home Page', () => {
  it('shows welcome message', () => {
    cy.visit('http://localhost:5173'); // or the port Vite runs on
    cy.contains('Welcome').should('exist'); // update this text to match your homepage
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[alt="How we design our products"]').click();
    cy.get('[href="/Signin"] > .MuiButtonBase-root').click();
    cy.get('[href="/Products"] > .MuiButtonBase-root').click();
    /* ==== End Cypress Studio ==== */
  });
});
