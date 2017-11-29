import { HoveodopgavenPage } from './app.po';

describe('hoveodopgaven App', () => {
  let page: HoveodopgavenPage;

  beforeEach(() => {
    page = new HoveodopgavenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
