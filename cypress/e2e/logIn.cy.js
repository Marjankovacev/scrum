/// <reference types="Cypress" />
import { loginPage } from "../pageObject/loginPage";

describe("login tests ", () => {
  beforeEach("visit the app ", () => {
    cy.visit("/");
    
    });
    it("Log in valid",()=>{
        loginPage.login("Miroslav023@gmail.com", "Miroslav023");
        cy.url().should("not.contain", "/login");
    });

   });
   
  
