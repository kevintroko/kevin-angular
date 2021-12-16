import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatRippleModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatRippleModule,
    MatIconModule
  ],
  declarations: [],
  bootstrap: []
})
export class CustomMaterialModule {}
