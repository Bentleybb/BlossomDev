describe('Home Page', () => {
  it('shows welcome message', () => {
    cy.visit('http://localhost:5173'); // or the port Vite runs on
    cy.contains('Welcome').should('exist'); // update this text to match your homepage
  });
});
