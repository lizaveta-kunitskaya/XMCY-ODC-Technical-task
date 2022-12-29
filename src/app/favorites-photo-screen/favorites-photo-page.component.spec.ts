import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPhotoPageComponent } from './favorites-photo-page.component';

describe('FavoritesPhotoPageComponent', () => {
  let component: FavoritesPhotoPageComponent;
  let fixture: ComponentFixture<FavoritesPhotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesPhotoPageComponent ]
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
