import { AngularComponentCommPage } from './app.po';

describe('angular-component-comm App', () => {
  let page: AngularComponentCommPage;

  beforeEach(() => {
    page = new AngularComponentCommPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
