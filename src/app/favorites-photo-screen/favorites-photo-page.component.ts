import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-favorites-photo-page',
  templateUrl: './favorites-photo-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesPhotoPageComponent {

  readonly data$ = this.dataService.getFavoritePhotos();

  constructor(private readonly dataService: DataService) { }
}
