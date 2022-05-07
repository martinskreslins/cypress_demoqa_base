import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  static get getSelectable() {
    return cy.get("#verticalListContainer");
  }
  static get goToGrid() {
    return cy.get("[data-rb-event-key='grid']");
  }
  static get selectGrid() {
    return cy.get("#gridContainer");
  }
}

export default SelectablePage;