import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './components/photo/photo.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
