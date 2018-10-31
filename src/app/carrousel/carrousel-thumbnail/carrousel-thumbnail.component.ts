import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Photo } from '../../model';

@Component({
  selector: 'app-carrousel-thumbnail',
  template: `
  <a href="javascipt:;" (click)="onClick.emit()" role="button">
    <img [src]="photo.thumbnailUrl" [attr.aria-label]="photo.title"/>
  </a>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarrouselThumbnailComponent {
  @Input() photo: Photo;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
}
