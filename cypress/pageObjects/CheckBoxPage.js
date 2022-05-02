import BasePage from "./BasePage";
class CheckBoxPage extends BasePage{
    static get url() {
        return "/checkbox";
    }
    static get exampleElement() {
        return cy.get("exampleSelector");
    }
    static get checkboxTitle() {
        return cy.get(".rct-title");
    }
    static get expandButton() {
        return cy.get("button[aria-label='Expand all']");
    }
    static get checkboxResult() {
        return cy.get("#result");
    }
}
export default CheckBoxPage;