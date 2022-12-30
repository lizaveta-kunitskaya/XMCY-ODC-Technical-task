import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PhotoScreenPageComponent } from './photo-screen-page.component';
import { PhotoScreenRoutingModule } from './photo-screen-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PhotoScreenPageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    PhotoScreenRoutingModule,
    SharedModule,
  ]
})
export class PhotoScreenModule { }
