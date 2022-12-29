import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoScreenPageComponent } from './photo-screen-page.component';

describe('PhotoScreenPageComponent', () => {
  let component: PhotoScreenPageComponent;
  let fixture: ComponentFixture<PhotoScreenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoScreenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoScreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
