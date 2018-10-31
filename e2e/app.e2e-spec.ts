import { MimecastPage } from './app.po';

describe('mimecast App', () => {
  let page: MimecastPage;

  beforeEach(() => {
    page = new MimecastPage();
    page.navigateTo();
  });

  it('should display the carrousel with a main photo and 2 thumbnails', () => {
    expect(page.getMainPhotoText()).toBeDefined();
    expect(page.getThumbnailsLength()).toEqual(2);
  });

  it('should change the photos when clicking on previous and see it again when clicking on next', () => {
    const currentPhotoText = page.getMainPhotoText();
    page.clickPreviousPhoto();
    expect(page.getMainPhotoText()).toBeDefined();
    expect(page.getMainPhotoText()).not.toEqual(currentPhotoText);

    page.clickNextPhoto();
    expect(page.getMainPhotoText()).toEqual(currentPhotoText);
  });
});
