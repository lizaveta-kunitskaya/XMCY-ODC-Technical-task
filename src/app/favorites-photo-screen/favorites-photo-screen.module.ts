import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesPhotoPageComponent } from './favorites-photo-page.component';
import { FavoritesPhotoScreenRoutingModule } from './favorites-photo-screen-routing.module';

@NgModule({
  declarations: [FavoritesPhotoPageComponent],
  imports: [
    CommonModule,
    FavoritesPhotoScreenRoutingModule,
  ]
})
export class FavoritesPhotoScreenModule { }
