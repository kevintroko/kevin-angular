import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatRippleModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatRippleModule
  ],
  declarations: [],
  bootstrap: []
})
export class CustomMaterialModule {}
