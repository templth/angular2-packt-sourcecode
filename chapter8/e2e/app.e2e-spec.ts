import { Chapter8Page } from './app.po';

describe('chapter8 App', function() {
  let page: Chapter8Page;

  beforeEach(() => {
    page = new Chapter8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
