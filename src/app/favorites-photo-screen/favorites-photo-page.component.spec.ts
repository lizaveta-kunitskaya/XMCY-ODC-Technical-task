import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { DataService } from '../core/services/data.service';
import { FavoritesPhotoPageComponent } from './favorites-photo-page.component';

describe('FavoritesPhotoPageComponent', () => {
  let component: FavoritesPhotoPageComponent;
  let fixture: ComponentFixture<FavoritesPhotoPageComponent>;

  const mockDataService = jasmine.createSpyObj('DataService', ['getFavoritePhotos']);
  mockDataService.getFavoritePhotos.and.returnValue(of([]));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesPhotoPageComponent],
      providers: [
        { provide: DataService, useValue: mockDataService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
