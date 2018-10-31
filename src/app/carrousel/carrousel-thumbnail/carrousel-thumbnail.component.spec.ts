import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CarrouselThumbnailComponent } from './carrousel-thumbnail.component';
import { Photo } from '../../model';

const mockPhoto: Photo = {
  albumId: 1,
  id: 1,
  title: 'test title 1',
  thumbnailUrl: 'testThumbnailUrl1',
  url: 'test url1'
};

const mockPreviousPhoto = jasmine.createSpy('previousPhoto').and.callFake( () => {});

describe('CarrouselThumbnailComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: CarrouselThumbnailComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        CarrouselThumbnailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should render correctly and set the image src as expected', () => {
    expect(compiled.querySelector('img').src).toMatch(mockPhoto.thumbnailUrl);
    expect(compiled.querySelector('img').getAttribute('aria-label')).toMatch(mockPhoto.title);
  });

  it('should send an event when clicked on', () => {
    compiled.querySelector('a').click();
    expect(mockPreviousPhoto).toHaveBeenCalled();
  });

});

@Component({
  template: `
  <app-carrousel-thumbnail
  (onClick)="previousPhoto()"
  [photo]="photo">
  </app-carrousel-thumbnail>
  `
})
class TestHostComponent {
  photo = mockPhoto;
  previousPhoto = mockPreviousPhoto;
}
