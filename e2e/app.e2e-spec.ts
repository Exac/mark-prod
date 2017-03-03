import { MarkProdPage } from './app.po';

describe('mark-prod App', function() {
  let page: MarkProdPage;

  beforeEach(() => {
    page = new MarkProdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
