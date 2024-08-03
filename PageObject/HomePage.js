class HomePage {
  url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  usernameField = "input[placeholder='Username']";
  passwordField = "input[placeholder='Password']";
  loginBtn = "button[type='submit']";
  labelMsg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
  errorMessage = ".oxd-alert-content";
  

  visitHomepage() {
    cy.visit(this.url);
  }

  setUsername(username) {
    cy.get(this.usernameField).type(username);
  }

  setPassword(password) {
    cy.get(this.passwordField).type(password);
  }

  clickLogin() {
    cy.get(this.loginBtn).click();
  }

  verifyLogin() {
    cy.get(this.labelMsg).should("have.text", "Dashboard");
  }
  verifyErrorMessage() {
    cy.get(this.errorMessage).should("have.text", "Invalid credentials");
  }
}

export default HomePage;
