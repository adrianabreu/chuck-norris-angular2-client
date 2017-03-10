import { ChuckNorrisAngular2ClientPage } from './app.po';

describe('chuck-norris-angular2-client App', function() {
  let page: ChuckNorrisAngular2ClientPage;

  beforeEach(() => {
    page = new ChuckNorrisAngular2ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
