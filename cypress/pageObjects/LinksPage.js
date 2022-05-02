import BasePage from "./BasePage";

class LinksPage extends BasePage {
  static get url() {
    return "/links";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  static get createdLink() {
    return cy.get("#created");
  }
  static get linkResponse() {
    return cy.get("#linkResponse");
  }
}

export default LinksPage;