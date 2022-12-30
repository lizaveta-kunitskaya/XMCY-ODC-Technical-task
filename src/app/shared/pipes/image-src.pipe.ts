import { Pipe, PipeTransform } from '@angular/core';

import { BASE_URL } from 'src/app/core/constants/url.constants';

@Pipe({
  name: 'imageSrc'
})
export class ImageSrcPipe implements PipeTransform {

  transform(id: string, width: number): string {
    return `${BASE_URL}/id/${id}/${width}`;
  }
}
