import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { DataService } from '../core/services/data.service';
import { SinglePhotoPageComponent } from './single-photo-page.component';

describe('SinglePhotoPageComponent', () => {
  let component: SinglePhotoPageComponent;
  let fixture: ComponentFixture<SinglePhotoPageComponent>;

  const mockDataService = jasmine.createSpyObj('DataService', ['getPhotoById']);
  mockDataService.getPhotoById.and.returnValue(of(null));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglePhotoPageComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: DataService, useValue: mockDataService },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
