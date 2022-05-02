import BasePage from "./BasePage";

class WebTablePage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }
  static get addUser() {
    return cy.get("#addNewRecordButton");
  }
  static get setName() {
    return cy.get("#firstName-wrapper");
  }
  static get setSurname() {
    return cy.get("#lastName-wrapper");
  }
  static get setEmail() {
    return cy.get("#userEmail-wrapper");
  }
  static get setAge() {
    return cy.get("#age");
  }
  static get setSalary() {
    return cy.get("#salary-wrapper");
  }
  static get setDepartment() {
    return cy.get("#department-wrapper");
  }
  static get submitForm() {
    return cy.get("#submit");
  }
  static get rows() {
    return cy.get("[role='rowgroup']");
  }
  static findRow(value){
      return this.rows.contains(value).parent();
  }
  static deleteUser(value) {
    return this.findRow(value).find("[title='Delete']").click();
  }
}

export default WebTablePage;