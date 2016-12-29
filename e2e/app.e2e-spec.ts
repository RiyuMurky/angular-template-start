import { AngularTemplateStartPage } from './app.po';

describe('angular-template-start App', function() {
  let page: AngularTemplateStartPage;

  beforeEach(() => {
    page = new AngularTemplateStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
