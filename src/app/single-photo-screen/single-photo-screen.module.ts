import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePhotoPageComponent } from './single-photo-page.component';
import { SinglePhotoScreenRoutingModule } from './single-photo-screen-routing.module';

@NgModule({
  declarations: [SinglePhotoPageComponent],
  imports: [
    CommonModule,
    SinglePhotoScreenRoutingModule,
  ]
})
export class SinglePhotoScreenModule { }
