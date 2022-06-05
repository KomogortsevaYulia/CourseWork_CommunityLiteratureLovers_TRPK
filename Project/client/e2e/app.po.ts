import { browser, element, by } from 'protractor';

export class Ng2RealApp {
  navigateToHome() {
    return browser.get('/');
  }
  navigateToLogin() {
    return browser.get('/login');
  }
  navigateToRegister() {
    return browser.get('/register');
  }
  navigateToHelp(){
    return browser.get('/help')
  }

  getHeadingText() {
    // Get the home page heading element reference
    return element(by.css('h1')).getText();
  }
  getText() {
    // Get the home page heading element reference
    return element(by.css('p')).getText();
  }
  
}
