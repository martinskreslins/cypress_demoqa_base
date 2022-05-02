import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import WebTablePage from "../../pageObjects/WebTablePage";
import ButtonPage from "../../pageObjects/ButtonPage";
import LinksPage from "../../pageObjects/LinksPage";


context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Add scenario stuff here
      TextBoxPage.getFullName.type("Mārtiņš Krēsliņš");
      TextBoxPage.getEmail.type("asd@gmail.com");
      TextBoxPage.getCurrentAddress.type("Nārnijas stacija platforma 3 un 3/4");
      TextBoxPage.getPermAddress.type("Ninth circle of hell.");
      TextBoxPage.submitButton.click();

      TextBoxPage.pName
        .should("exist")
        .should("be.visible")
        .should("contain", "Mārtiņš Krēsliņš");
      TextBoxPage.pEmail
        .should("contain", "asd@gmail.com");
        TextBoxPage.pCA
        .should("contain", "Nārnijas stacija platforma 3 un 3/4");
        TextBoxPage.pPA
        .should("contain", "Ninth circle of hell.");
    });
    it("Filling in Text Boxes", () => {
      cy.fixture('textBoxData').then((data) => {
        cy.log(JSON.stringify(data));
        TextBoxPage.getFullName.type(data.fullName);
        TextBoxPage.getEmail.type(data.email);
        TextBoxPage.getCurrentAddress.type(data.currentAddress);
        TextBoxPage.getPermAddress.type(data.permanentAddress);
        TextBoxPage.submitButton.click();
        TextBoxPage.pName
        .should("exist")
        .should("be.visible")
        .should("contain", data.fullName);
      TextBoxPage.pEmail
        .should("contain", data.email);
        TextBoxPage.pCA
        .should("contain", data.currentAddress);
        TextBoxPage.pPA
        .should("contain", data.permanentAddress);
      });
    });
  });
});

context("Check Box scenarios", () => {
  beforeEach(() => {
    CheckBoxPage.visit();
  });

  it("Click checkboxes - Notes And general", () => {
    CheckBoxPage.expandButton.click();
    CheckBoxPage.checkboxTitle.contains("Notes").click();
    CheckBoxPage.checkboxTitle.contains("General").click();
    CheckBoxPage.checkboxResult.should("contain", "notes")
      .should("contain", "general");
  });
  it("Click checkboxes - Office", () => {
    CheckBoxPage.expandButton.click();
    CheckBoxPage.checkboxTitle.contains("Office").click();
    CheckBoxPage.checkboxResult
      .should("contain", "office")
      .should("contain", "public")
      .should("contain", "private")
      .should("contain", "classified")
      .should("contain", "general");
  });
});
context("Radio buttons scenarios", () => {
  beforeEach(() => {
    RadioButtonsPage.visit();
  });

  it("Click Radio Buttons", () => {
    RadioButtonsPage.yesRadio.click({ force: true });
    RadioButtonsPage.resultRadio.should("contain", "Yes");
    RadioButtonsPage.impressiveRadio.click({force: true});
    RadioButtonsPage.impressiveRadio.should("contain", "Impressive");
    //RadioButtonsPage.noRadio.should("exist").should("be.disabled");
  });
});
context("Create User", () => {
  beforeEach(() => {
    WebTablePage.visit();
  });

  it("Open Web Tables", () => {
    WebTablePage.addUser.click();
    WebTablePage.setName.type("Mātiņš");
    WebTablePage.setSurname.type("Krēsliņš");
    WebTablePage.setEmail.type("martins@gmail.com");
    WebTablePage.setAge.type("21");
    WebTablePage.setSalary.type("9999999");
    WebTablePage.setDepartment.type("IT");
    WebTablePage.submitForm.click();
    //valid check
    WebTablePage.findRow("martins@gmail.com")
      //.should("contain", "Mārtiņš")
      //.should("contain", "Krēsliņš")
      .should("contain", "martins@gmail.com");
      //.should("contain", "21")
      //.should("contain", "9999999")
      //.should("contain", "IT");
  });
  it("Delete All Users", () => {
    beforeEach(() => {
      WebTablePage.visit();
    });
    WebTablePage.rows.should("contain", "Cierra");
    WebTablePage.deleteUser("Cierra");
    WebTablePage.rows.should("not.contain", "Cierra");
    WebTablePage.rows.should("contain", "Alden");
    WebTablePage.deleteUser("Alden");
    WebTablePage.rows.should("not.contain", "Alden");
    WebTablePage.rows.should("contain", "Kierra");
    WebTablePage.deleteUser("Kierra");
    WebTablePage.rows.should("not.contain", "Kierra");
  });
});
context("Create User", () => {
  beforeEach(() => {
    ButtonPage.visit();
  });
  it("click all buttons", () => {
    ButtonPage.dblButton.dblclick();
    ButtonPage.buttonDblResult.should("be.visible")
      .should("contain", "You have done a double click");
    ButtonPage.rgtButton.rightclick();
    ButtonPage.buttonRgtResult.should("be.visible")
      .should("contain", "You have done a right click");
    ButtonPage.regButton.click();
    ButtonPage.buttonRegResult.should("be.visible")
      .should("contain", "You have done a dynamic click");

  });
});
context("LinksPage thing", () => {
  beforeEach(() => {
    LinksPage.visit();
  });
  it.only("API intercepting", () => {
    cy.intercept("GET", "created", {statuscode: 400});
    LinksPage.createdLink.click();
    LinksPage.linkResponse.should("contain", "200");
  });
});
