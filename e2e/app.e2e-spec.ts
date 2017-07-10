import { BaseBootstrap4AppPage } from './app.po';

describe('base-bootstrap4-app App', () => {
  let page: BaseBootstrap4AppPage;

  beforeEach(() => {
    page = new BaseBootstrap4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
