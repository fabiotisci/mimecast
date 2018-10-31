/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { CarrouselContainer } from './carrousel.container';
import { PhotosService } from '../services/photos.service';
import { Photo } from '../model';

let mockPhotosService: jasmine.Spy;

describe('CarrouselContainer', () => {
  let component: CarrouselContainer;
  let fixture: ComponentFixture<CarrouselContainer>;
  let service: PhotosService;
  const mockPhotos: Photo[] = [
    { albumId: 1, id: 1, title: 'test title 1',  thumbnailUrl: 'testThumbnailUrl1', url: 'test url1' },
    { albumId: 2, id: 2, title: 'test title 2',  thumbnailUrl: 'testThumbnailUrl2', url: 'test url2' },
    { albumId: 3, id: 3, title: 'test title 3',  thumbnailUrl: 'testThumbnailUrl3', url: 'test url3' }
  ];


  describe('Successful scenario', () => {
    beforeEach(async(() => {
      mockPhotosService = jasmine.createSpy('getPhotos').and.returnValue(of(mockPhotos));
      initComponent();
    }));

    beforeEach(() => {
      service = TestBed.get(PhotosService);
      fixture = TestBed.createComponent(CarrouselContainer);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have the data initialised', () => {
      expect(component.photos).toEqual(mockPhotos);
      expect(component.currentPhotoIndex).toEqual(0);
      expect(component.nextPhotoIndex).toEqual(1);
      expect(component.previousPhotoIndex).toEqual(2);
      expect(component.error).toBeUndefined();

    });

    it('should change the indexes of the photos when clicking nextPhoto', () => {
      component.nextPhoto();
      expect(component.currentPhotoIndex).toEqual(1);
      expect(component.nextPhotoIndex).toEqual(2);
      expect(component.previousPhotoIndex).toEqual(0);
    });

    it('should change the indexes of the photos when clicking previousPhoto', () => {
      component.previousPhoto();
      expect(component.currentPhotoIndex).toEqual(2);
      expect(component.nextPhotoIndex).toEqual(0);
      expect(component.previousPhotoIndex).toEqual(1);
    });
  });

  describe('Failure scenario', () => {
    beforeEach(async(() => {
      mockPhotosService = jasmine.createSpy('getPhotos').and.returnValue(ErrorObservable.create('404'));
      initComponent();
    }));

    beforeEach(() => {
      service = TestBed.get(PhotosService);
      fixture = TestBed.createComponent(CarrouselContainer);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have the data initialised', () => {
      expect(component.photos).toEqual([]);
      expect(component.error).toEqual('There was an error loading the data, please try again in a few minutes');
    });
  });
});

function initComponent() {
  TestBed.configureTestingModule({
    declarations: [ CarrouselContainer ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
      {
        provide: PhotosService,
        useValue: {
          getPhotos: mockPhotosService
        }
      }
    ]
  })
  .compileComponents();
}
