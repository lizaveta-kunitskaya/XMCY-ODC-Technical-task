import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { FavoritePhotoService } from 'src/app/core/services/favorite-photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {
  @Input() id?: string;
  @Input() src?: string;
  @Input() alt?: string;
  @Input() set isFavorite(value: boolean) {
    this._isFavorite = value;
  };
  @Input() imageIsClickable?: boolean;

  private _isFavorite?: boolean;

  @Output() imageClicked = new EventEmitter<string>();

  constructor(private readonly favoritePhotoService: FavoritePhotoService) { }

  get isFavorite(): boolean {
    return !!(this._isFavorite);
  }

  imageOnClick() {
    this.imageClicked.emit(this.id);
  }

  addToFavorites() {
    if(this.id) {
      this.favoritePhotoService.addPhotoToFavorites(this.id);
      this._isFavorite = true;
    }
  }

  removeFromFavorites() {
    if(this.id) {
      this.favoritePhotoService.removePhotoFromFavorites(this.id);
      this._isFavorite = false;
    }
  }
}
