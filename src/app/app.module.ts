import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarrouselContainer } from './carrousel/carrousel.container';
import { CarrouselItemComponent } from './carrousel/carrousel-item/carrousel-item.component';
import { CarrouselThumbnailComponent } from './carrousel/carrousel-thumbnail/carrousel-thumbnail.component';
import { PhotosService } from './services/photos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarrouselContainer,
    CarrouselItemComponent,
    CarrouselThumbnailComponent
],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
