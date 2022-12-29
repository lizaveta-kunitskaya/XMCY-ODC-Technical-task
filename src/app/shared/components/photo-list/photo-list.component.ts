import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Photo } from 'src/app/core/models/photo.models';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListComponent {
  @Input() data: Photo[] = [];
  @Input() photoWidth = 300;

  constructor(private readonly router: Router) { }

  goToDetailView(id: string) {
    this.router.navigate(['photos', id]);
  }
}
