import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./photo-screen/photo-screen.module').then((m) => m.PhotoScreenModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites-photo-screen/favorites-photo-screen.module').then((m) => m.FavoritesPhotoScreenModule),
  },
  {
    path: 'photos/:id',
    loadChildren: () => import('./single-photo-screen/single-photo-screen.module').then((m) => m.SinglePhotoScreenModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
