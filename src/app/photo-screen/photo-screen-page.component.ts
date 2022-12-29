import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, finalize, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Photo } from '../core/models/photo.models';

import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-photo-screen-page',
  templateUrl: './photo-screen-page.component.html',
  styleUrls: ['./photo-screen-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoScreenPageComponent implements OnInit {
  data: Photo[] = [];

  readonly loading$ = new Subject<boolean>();

  private readonly page$ = new BehaviorSubject(1);
  private readonly unsubscribe$ = new Subject<void>();

  constructor(private readonly dataService: DataService, private readonly cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.page$.pipe(
      takeUntil(this.unsubscribe$),
      tap(() => this.loading$.next(true)),
      switchMap(page => this.dataService.getPhotos(page)),
      debounceTime(300),
      tap(() => this.loading$.next(false)),
    ).subscribe((data) => {
      this.data = [...this.data, ...data];
      this.cdr.markForCheck();
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached) {
      const page = this.page$.getValue() + 1;
      this.page$.next(page);
    }
  }

  get bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
  }
}
