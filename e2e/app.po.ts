import { browser, element, by } from 'protractor';

export class LoginPage {
  private credentias = {
    username: 'test',
    password: 'test'
  };

  navigateTo() {
    return browser.get('/login');
  }

  fillCredentials(credentias: any = this.credentias) {
    element(by.css('[name="username"]')).sendKeys(credentias.username);
    element(by.css('[name="password"]')).sendKeys(credentias.password);
    element(by.css('.btn-primary')).click();
  }
}

export class DashboardPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getLogOut(){
    return element(by.css(".log-out")).click();
  }
}

export class PublicPage{
  navigateTo() {
    return browser.get('');
  }

  getLogOut(){
    return element(by.css(".log-out")).click();
  }
}


