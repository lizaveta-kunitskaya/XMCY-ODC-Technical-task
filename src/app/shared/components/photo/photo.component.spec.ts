import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    component.id = '5';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event if image was clicked', () => {
    const image = fixture.debugElement.nativeElement.querySelector('img.image');

    spyOn(component.imageClicked, 'emit');

    image.dispatchEvent(new Event('click'));

    expect(component.imageClicked.emit).toHaveBeenCalledWith('5');
  });
});
