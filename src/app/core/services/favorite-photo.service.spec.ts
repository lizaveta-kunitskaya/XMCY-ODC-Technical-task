import { TestBed } from '@angular/core/testing';

import { FavoritePhotoService } from './favorite-photo.service';

describe('FavoritePhotoService', () => {
  let service: FavoritePhotoService;

  beforeEach(() => {
    const store: { [key: string]: string } = {};
    const mockLocalStorage = {
      getItem: (key: string): string | null => {
        return store[key] || null;
      },

      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);

    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritePhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should save photo id to localStorage', () => {
    it('addPhotoToFavorites', () => {
      service.addPhotoToFavorites('fakeId');

      expect(service.currentFavorites).toEqual(['fakeId']);
    });

    it('removePhotoFromFavorites', () => {
      service.addPhotoToFavorites('fakeId1');
      service.addPhotoToFavorites('fakeId2');
      service.addPhotoToFavorites('fakeId3');

      service.removePhotoFromFavorites('fakeId2');

      expect(service.currentFavorites).toEqual(['fakeId1', 'fakeId3']);
    });
  })
});
