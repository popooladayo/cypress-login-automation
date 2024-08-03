import HomePage from "../../PageObject/HomePage";

describe("Login Functionality", () => {
  it("should login successfully with valid credentials", () => {
    const homepage = new HomePage();
    homepage.visitHomepage();
    homepage.setUsername("Admin");
    homepage.setPassword("admin123");
    homepage.clickLogin();
    homepage.verifyLogin();
  });

  it("should display an error message for invalid credentials", () => {
    const homepage = new HomePage();
    homepage.visitHomepage();
    homepage.setUsername("invalidUsername");
    homepage.setPassword("admin321");
    homepage.clickLogin();
    homepage.verifyErrorMessage();
  });
});
