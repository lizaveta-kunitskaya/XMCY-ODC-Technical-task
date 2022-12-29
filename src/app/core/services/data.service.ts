import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Photo } from '../models/photo.models';
import { BASE_URL } from '../constants/url.constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private readonly http: HttpClient) { }

  getPhotos(pageNumber: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${BASE_URL}/v2/list?page=${pageNumber}&limit=20`).pipe(
      catchError(error => {
        console.error(error.message);

        return of([]);
      })
    );
  }
}
