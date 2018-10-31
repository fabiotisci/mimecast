/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PhotosService } from './photos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Photo } from '../model';

describe('Service: Photos', () => {
  let service: PhotosService;
  let httpMock: HttpTestingController;
  const mockPhotos: Photo[] = [
    { albumId: 1, id: 1, title: 'test title 1',  thumbnailUrl: 'testThumbnailUrl1', url: 'test url1' },
    { albumId: 2, id: 2, title: 'test title 2',  thumbnailUrl: 'testThumbnailUrl2', url: 'test url2' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(PhotosService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should successfuly retrieve data', () => {
    service.getPhotos().subscribe((data: Photo[]) => {
      expect(data).toEqual(mockPhotos);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos');
    expect(req.request.method).toBe('GET');

    req.flush(mockPhotos);

    httpMock.verify();
  });

});
