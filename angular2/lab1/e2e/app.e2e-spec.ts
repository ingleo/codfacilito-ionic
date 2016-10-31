import { Lab1Page } from './app.po';

describe('lab1 App', function() {
  let page: Lab1Page;

  beforeEach(() => {
    page = new Lab1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
