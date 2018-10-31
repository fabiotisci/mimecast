import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { catchError } from 'rxjs/operators';
import { Photo, ActionType } from '../model';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.html',
  styleUrls: ['./carrousel.css']
})
export class CarrouselContainer implements OnInit {

  error: string;
  currentPhotoIndex: number;
  previousPhotoIndex: number;
  nextPhotoIndex: number;
  photos: Photo[] = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos().pipe(
      catchError( () => {
        this.error = 'There was an error loading the data, please try again in a few minutes';
        return [];
      })
    ).subscribe( photos => {
      this.photos = photos;
      this.currentPhotoIndex = 0;
      this.previousPhotoIndex = this.checkIndexAndAssignValue(this.currentPhotoIndex, 'PREVIOUS');
      this.nextPhotoIndex = this.checkIndexAndAssignValue(this.currentPhotoIndex, 'NEXT');
      });
  }

  nextPhoto() {
    this.currentPhotoIndex = this.checkIndexAndAssignValue(this.currentPhotoIndex, 'NEXT');
    this.previousPhotoIndex = this.checkIndexAndAssignValue(this.previousPhotoIndex, 'NEXT');
    this.nextPhotoIndex = this.checkIndexAndAssignValue(this.nextPhotoIndex, 'NEXT');
  }

  previousPhoto() {
    this.currentPhotoIndex = this.checkIndexAndAssignValue(this.currentPhotoIndex, 'PREVIOUS');
    this.previousPhotoIndex = this.checkIndexAndAssignValue(this.previousPhotoIndex, 'PREVIOUS');
    this.nextPhotoIndex = this.checkIndexAndAssignValue(this.nextPhotoIndex, 'PREVIOUS');
  }

  private checkIndexAndAssignValue(index: number, action: ActionType): number {
    const maxValue = this.photos.length - 1;

    switch (action) {
      case 'PREVIOUS':
        return ( index <= 0) ? maxValue : index - 1;
      case 'NEXT':
        return ( index >= maxValue) ? 0 : index + 1;
      default:
        return index;
    }
  }

}
