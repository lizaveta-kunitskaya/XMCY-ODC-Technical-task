import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, finalize, delay } from 'rxjs/operators';
import { Photo } from '../core/models/photo.models';

import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-photo-screen-page',
  templateUrl: './photo-screen-page.component.html',
  styleUrls: ['./photo-screen-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoScreenPageComponent implements OnInit, OnDestroy {
  data: Photo[] = [];

  readonly loading$ = new BehaviorSubject(false);

  private page = 1;

  private readonly unsubscribe$ = new Subject<void>();

  constructor(private readonly dataService: DataService, private readonly cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getPhotos(this.page).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
      this.updatePhotoList(data);
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached && !this.isLoading) {
      this.loading$.next(true);
      this.page++;

      this.dataService.getPhotos(this.page).pipe(
        takeUntil(this.unsubscribe$),
        delay(300),
        finalize(() => this.loading$.next(false)),
      ).subscribe(data => {
        this.updatePhotoList(data);
      });
    }
  }

  get bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  get isLoading(): boolean {
    return this.loading$.getValue();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private updatePhotoList(data: Photo[]) {
    this.data = [...this.data, ...data];
    this.cdr.markForCheck();
  }
}
