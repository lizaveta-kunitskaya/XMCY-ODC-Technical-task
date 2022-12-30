import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { PhotoComponent } from './photo.component';
import { FavoritePhotoService } from 'src/app/core/services/favorite-photo.service';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let loader: HarnessLoader;
  let fixture: ComponentFixture<PhotoComponent>;

  const fakeFavoritePhotoService = jasmine.createSpyObj('FavoritePhotoService', ['addPhotoToFavorites', 'removePhotoFromFavorites']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoComponent],
      providers: [
        { provide: FavoritePhotoService, useValue: fakeFavoritePhotoService },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    component.id = '5';
    component.isFavorite = false;
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

  it('should add photo to favorites when Like button was clicked', async () => {
    const likeButtonHarness = MatButtonHarness.with({
      text: 'Like',
    });
    const likeButton = await loader.getHarness(likeButtonHarness);

    await likeButton.click();

    expect(fakeFavoritePhotoService.addPhotoToFavorites).toHaveBeenCalledWith('5');
  });

  it('should remove photo from favorites when Remove From Favorites button was clicked', async () => {
    const likeButtonHarness = MatButtonHarness.with({
      text: 'Like',
    });
    const likeButton = await loader.getHarness(likeButtonHarness);

    await likeButton.click();

    const removeFromFavoritesButtonHarness = MatButtonHarness.with({
      text: 'Remove from favorites',
    });
    const removeFromFavoritesButton = await loader.getHarness(removeFromFavoritesButtonHarness);

    await removeFromFavoritesButton.click();

    expect(fakeFavoritePhotoService.removePhotoFromFavorites).toHaveBeenCalledWith('5');
  });

  it('should toggle action buttons visibility when one of them was clicked', async () => {
    const likeButtonHarness = MatButtonHarness.with({
      text: 'Like',
    });
    const removeFromFavoritesButtonHarness = MatButtonHarness.with({
      text: 'Remove from favorites',
    });
    const likeButtonVisibility = async () => !!(await loader.getAllHarnesses(likeButtonHarness)).length;
    const removeFromFavoritesButtonVisibility = async () => !!(await loader.getAllHarnesses(removeFromFavoritesButtonHarness)).length;

    const likeButton = await loader.getHarness(likeButtonHarness);

    await likeButton.click();

    expect(await likeButtonVisibility()).toBeFalse();
    expect(await removeFromFavoritesButtonVisibility()).toBeTrue();

    const removeFromFavoritesButton = await loader.getHarness(removeFromFavoritesButtonHarness);

    await removeFromFavoritesButton.click();

    expect(await likeButtonVisibility()).toBeTrue();
    expect(await removeFromFavoritesButtonVisibility()).toBeFalse();
  });
});
