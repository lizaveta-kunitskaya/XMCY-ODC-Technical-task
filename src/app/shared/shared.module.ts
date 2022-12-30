import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { PhotoComponent } from './components/photo/photo.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { ImageSrcPipe } from './pipes/image-src.pipe';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    ImageSrcPipe,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    PhotoComponent,
    PhotoListComponent,
    ImageSrcPipe,
  ],
})
export class SharedModule { }
