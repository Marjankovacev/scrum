/// <reference types="Cypress" />
import { loginPage } from "../pageObject/loginPage";
import { addOrganization } from "../pageObject/addOrganization";
import { faker } from "@faker-js/faker";

describe("ADD Organization tests ", () => {
    const orgData = {
        orgName: faker.name.firstName(),
    };

    beforeEach("visit the app ", () => {
      cy.visit("/");
      loginPage.login("Miroslav023@gmail.com", "Miroslav023");
      cy.wait(300)
      });
      
      
    it.only("ADD Organization",()=>{
        addOrganization.fillData(orgData.orgName);
        cy.wait(2000)
        addOrganization.okButton.click()
    })  
      
});