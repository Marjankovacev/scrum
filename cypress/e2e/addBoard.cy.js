import { loginPage } from "../pageObject/loginPage";
import { addOrganization } from "../pageObject/addOrganization";
import { addBoard } from "../pageObject/addBoard";
import { faker } from "@faker-js/faker";

describe("ADD Board tests ", () => {
    const orgData = {
        orgName: faker.name.firstName(),
    };

    beforeEach("visit the app ", () => {
      cy.visit("/");
      loginPage.login("Miroslav023@gmail.com", "Miroslav023");
      cy.wait(300);
      addOrganization.fillData(orgData.orgName);
        cy.wait(2000)
        addOrganization.okButton.click()
      });
      
      
    it.only("ADD Organization",()=>{
        addBoard.fillboardData(orgData.orgName);
        
    })  
      
});