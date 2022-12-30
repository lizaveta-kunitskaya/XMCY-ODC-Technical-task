import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';

import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-single-photo-page',
  templateUrl: './single-photo-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePhotoPageComponent {
  readonly data$ = this.activatedRoute.params.pipe(map(({ id }) => id), switchMap(id => this.dataService.getPhotoById(id)));

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly dataService: DataService) { }
}
