import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePhotoPageComponent } from './single-photo-page.component';
import { SinglePhotoScreenRoutingModule } from './single-photo-screen-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SinglePhotoPageComponent],
  imports: [
    CommonModule,
    SinglePhotoScreenRoutingModule,
    SharedModule,
  ]
})
export class SinglePhotoScreenModule { }
