import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ProductsComponent} from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class ProductsModule { }
