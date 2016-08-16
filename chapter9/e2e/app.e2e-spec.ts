import { Chapter9Page } from './app.po';

describe('chapter9 App', function() {
  let page: Chapter9Page;

  beforeEach(() => {
    page = new Chapter9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
