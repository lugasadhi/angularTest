import { LoginPage,
   DashboardPage,
   PublicPage } from './app.po';
import { element } from '@angular/core/src/render3';

describe('core-ui App', function() {
  let page: LoginPage;
  let dashboard :DashboardPage;
  let pp :PublicPage;

  beforeEach(() => {
    page = new LoginPage();
    dashboard = new DashboardPage();
    pp = new PublicPage();
  });


  it('when login is successful — he should redirect to default “public” page', () => {
    page.navigateTo();
    page.fillCredentials();
    dashboard.navigateTo();
  });

  it('logout should return to login', () => {
    pp.navigateTo();
    page.navigateTo();
  });

  
});
