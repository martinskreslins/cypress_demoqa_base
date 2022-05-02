import BasePage from "./BasePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  static get getFullName() {
    return cy.get("#userName");
  }
  static get getEmail() {
    return cy.get("#userEmail");
  }
  static get getCurrentAddress() {
    return cy.get("#currentAddress");
  }
  static get getPermAddress() {
    return cy.get("#permanentAddress");
  }
  static get submitButton() {
    return cy.get("button#submit");
  }
  static get pName() {
    return cy.get("#name");
  }
  static get pEmail() {
    return cy.get("#email");
  }
  static get pCA() {
    return cy.get("p#currentAddress");
  }
  static get pPA() {
    return cy.get("p#permanentAddress");
  }
}

export default TextBoxPage;
