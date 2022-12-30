import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Photo } from '../models/photo.models';
import { BASE_URL } from '../constants/url.constants';
import { FavoritePhotoService } from './favorite-photo.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private readonly http: HttpClient, private readonly favoritePhotoService: FavoritePhotoService) { }

  getPhotos(pageNumber?: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${BASE_URL}/v2/list?page=${pageNumber}&limit=20`).pipe(
      map(photos => photos.map(photo => this.setFavoriteStatus(photo))),
      catchError(error => {
        console.error(error.message);

        return of([]);
      })
    );
  }

  getPhotoById(id: string): Observable<Photo | null> {
    return this.http.get<Photo>(`${BASE_URL}/id/${id}/info`).pipe(
      map(photo => this.setFavoriteStatus(photo)),
      catchError(error => {
        console.error(error.message);

        return of(null);
      })
    );
  }

  getFavoritePhotos(): Observable<Photo[]> {
    return forkJoin(
      this.favoritePhotoService.currentFavorites.map(id => this.getPhotoById(id))
    ).pipe(
      map(photos => photos.filter(photo => !!photo)),
    ) as Observable<Photo[]>;
  }

  private setFavoriteStatus(photo: Photo): Photo {
    let isFavorite = this.favoritePhotoService.currentFavorites.includes(photo.id);

    return { ...photo, isFavorite };
  }
}
