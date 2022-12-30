import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { of } from 'rxjs';

import { PhotoScreenPageComponent } from './photo-screen-page.component';
import { Photo } from '../core/models/photo.models';
import { DataService } from '../core/services/data.service';

const mockDataPage1: Photo[] = [{
  id: 'fakeId1',
}];

const mockDataPage2: Photo[] = [{
  id: 'fakeId2',
}];

describe('PhotoScreenPageComponent', () => {
  let component: PhotoScreenPageComponent;
  let fixture: ComponentFixture<PhotoScreenPageComponent>;

  const fakeDataService = jasmine.createSpyObj<DataService>('DataService', ['getPhotos']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoScreenPageComponent],
      providers: [
        { provide: DataService, useValue: fakeDataService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fakeDataService.getPhotos.and.returnValue(of(mockDataPage1));
    fixture = TestBed.createComponent(PhotoScreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set data after init', () => {
    expect(component.data).toEqual(mockDataPage1);
  });

  it('should load more data', fakeAsync(() => {
    fakeDataService.getPhotos.and.returnValue(of(mockDataPage2));

    spyOnProperty(component, 'bottomReached').and.returnValue(true);

    window.dispatchEvent(new Event('scroll'));

    tick(300);

    expect(component.data).toEqual([...mockDataPage1, ...mockDataPage2]);
  }));
});
