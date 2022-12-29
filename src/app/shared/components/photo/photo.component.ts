import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

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
  @Input() isFavorite?: boolean;
  @Input() imageIsClickable?: boolean;

  @Output() imageClicked = new EventEmitter<string>();

  constructor() { }

  imageOnClick() {
    this.imageClicked.emit(this.id);
  }
}
