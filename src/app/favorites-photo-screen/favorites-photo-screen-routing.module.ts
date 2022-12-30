import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPhotoPageComponent } from './favorites-photo-page.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPhotoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPhotoScreenRoutingModule { }
