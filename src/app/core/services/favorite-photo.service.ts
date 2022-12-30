import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritePhotoService {

  get currentFavorites(): string[] {
    return JSON.parse(localStorage.getItem('favoritePhotos') || '[]');
  }

  removePhotoFromFavorites(photoId: string) {
    const nextFavorites = this.currentFavorites.filter(id => id !== photoId);

    this.setFavoritesToLocalStorage(nextFavorites);
  }

  addPhotoToFavorites(photoId: string) {
    const nextFavorites = [...this.currentFavorites, photoId];

    this.setFavoritesToLocalStorage(nextFavorites);
  }

  private setFavoritesToLocalStorage(favorites: string[]) {
    localStorage.setItem('favoritePhotos', JSON.stringify(favorites));
  }
}
