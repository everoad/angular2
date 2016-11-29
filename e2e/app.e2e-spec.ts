import { SibalPage } from './app.po';

describe('sibal App', function() {
  let page: SibalPage;

  beforeEach(() => {
    page = new SibalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
