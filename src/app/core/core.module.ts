import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule { }
