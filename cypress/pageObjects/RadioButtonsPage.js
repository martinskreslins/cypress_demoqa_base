import BasePage from "./BasePage";

class RadioButtonsPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  static get yesRadio() {
    return cy.get("#yesRadio");
  }
  static get impressiveRadio() {
    return cy.get("#impressiveRadio");
  }
  static get resultRadio() {
    return cy.get(".text-success");
  }
  static get noRadio() {
    return cy.get("#noRadio");
  }
}

export default RadioButtonsPage;