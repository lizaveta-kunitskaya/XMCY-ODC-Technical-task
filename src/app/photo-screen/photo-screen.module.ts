import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoScreenPageComponent } from './photo-screen-page.component';
import { PhotoScreenRoutingModule } from './photo-screen-routing.module';

@NgModule({
  declarations: [PhotoScreenPageComponent],
  imports: [
    CommonModule,
    PhotoScreenRoutingModule,
  ]
})
export class PhotoScreenModule { }
