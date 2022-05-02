import BasePage from "./BasePage";

class ButtonPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  
  static get dblButton() {
    return cy.get("#doubleClickBtn");
  }
  static get rgtButton() {
    return cy.get("#rightClickBtn");
  }
  static get regButton() {
    return cy.get(".btn-primary").contains(/^Click Me/);
  }
  static get buttonDblResult() {
    return cy.get("#doubleClickMessage");
  }
  static get buttonRgtResult() {
    return cy.get("#rightClickMessage");
  }
  static get buttonRegResult() {
    return cy.get("#dynamicClickMessage");
  }
}

export default ButtonPage;