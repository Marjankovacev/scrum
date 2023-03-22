class AddBoard {
    
    get boardTitle() {
        return cy.get('input[type="text"]');
    }
  
    get addButton() {
      return cy.get(".vs-c-btn").last();
    }
    get nextButton() {
        return cy.get("button").last();
    }
    get createButton() {
        return cy.get("button").last();
    }
    get okButton() {
        return cy.get("button").last();
    }

  
    
    fillboardData(name) {
      this.addButton.click();
      this.boardTitle.type(name);
    }
  }
  
  export const addBoard = new AddBoard();