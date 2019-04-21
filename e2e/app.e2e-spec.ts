import { LugasPage } from './app.po';

describe('core-ui App', function() {
  let page: LugasPage;

  beforeEach(() => {
    page = new LugasPage();
  });

  it('should display footer containing creativeLabs', () => {
    page.navigateTo();
  });
});
