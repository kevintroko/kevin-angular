import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatRippleModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatRippleModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [],
  bootstrap: []
})
export class CustomMaterialModule {}
