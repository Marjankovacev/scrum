class LoginPage {
    
    get emailInput() {
        return cy.get('.el-form-item__content').find('input[type="email"]');
    }
  
    get passwordInput() {
      return cy.get('.el-form-item__content').find('input[type="password"]');
    }
  
    get submitButton() {
      return cy.get("button").eq(0);
    }
  
    
    login(email, password) {
      this.emailInput.type(email);
      this.passwordInput.type(password);
      this.submitButton.click();
    }
  }
  
  export const loginPage = new LoginPage();