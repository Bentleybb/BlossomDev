import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
    },
    experimentalStudio: true, // ✅ Enable Cypress Studio
    baseUrl: 'http://localhost:5173', // ✅ Optional: easier test writing
  },
});
