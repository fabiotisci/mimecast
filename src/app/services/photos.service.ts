import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotosService {

  private BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.BASE_URL);
  }
}
