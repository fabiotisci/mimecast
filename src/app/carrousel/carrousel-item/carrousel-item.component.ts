import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Photo } from '../../model';

@Component({
  selector: 'app-carrousel-item',
  template: `
  <div>
    <img [src]="photo.url" [attr.aria-label]="photo.title" />
  </div>
  <p>{{photo.title}}</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarrouselItemComponent {
  @Input() photo: Photo;
}
