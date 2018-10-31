import { browser, by, element } from 'protractor';

export class MimecastPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainPhotoText() {
    return element(by.css('app-carrousel-item p')).getText();
  }

  getThumbnailsLength() {
    return element.all(by.css('app-carrousel-thumbnail')).count();
  }
}
