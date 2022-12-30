import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoScreenPageComponent } from './photo-screen-page.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoScreenPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoScreenRoutingModule { }
