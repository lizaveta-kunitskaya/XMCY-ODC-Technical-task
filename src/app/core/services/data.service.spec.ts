import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { of, throwError } from 'rxjs';

import { Photo } from '../models/photo.models';
import { DataService } from './data.service';
import { FavoritePhotoService } from './favorite-photo.service';

const mockData: Photo[] = [
  {
    id: 'fakeId1',
  },
  {
    id: 'fakeId2',
  },
];

describe('DataService', () => {
  let service: DataService;

  const fakeHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
  fakeHttpClient.get.and.returnValue(of(mockData));

  const fakeFavoritePhotoService = jasmine.createSpyObj('FavoritePhotoService', [], {
    currentFavorites: ['fakeId2'],
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useValue: fakeHttpClient },
        { provide: FavoritePhotoService, useValue: fakeFavoritePhotoService },
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data', () => {
    service.getPhotos(0).subscribe(value => {
      expect(value).toEqual([
        {
          id: 'fakeId1',
          isFavorite: false,
        },
        {
          id: 'fakeId2',
          isFavorite: true,
        },
      ]);
    })
  });

  it('should return an empty array if an error occurs', () => {
    fakeHttpClient.get.and.returnValue(throwError({ status: 500 }));
    service.getPhotos(0).subscribe(value => {
      expect(value).toEqual([]);
    })
  });
});
