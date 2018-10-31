import { MimecastPage } from './app.po';

describe('mimecast App', () => {
  let page: MimecastPage;

  beforeEach(() => {
    page = new MimecastPage();
  });

  it('should display the carrousel with a main photo and 2 thumbnails', () => {
    page.navigateTo();
    expect(page.getMainPhotoText()).toBeDefined();
    expect(page.getThumbnailsLength()).toEqual(2);
  });
});
