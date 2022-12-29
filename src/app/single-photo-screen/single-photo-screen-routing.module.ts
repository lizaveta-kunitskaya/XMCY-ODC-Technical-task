import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinglePhotoPageComponent } from './single-photo-page.component';

const routes: Routes = [
  {
    path: '',
    component: SinglePhotoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglePhotoScreenRoutingModule { }
