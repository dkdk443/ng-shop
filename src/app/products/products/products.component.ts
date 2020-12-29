import { Component, OnInit } from '@angular/core';
import { Product } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id: 1, title:'商品名1', subtitle: 'subsub', detail: 'aaaaaaaaaaaaaaaaaaaa'},
      {id: 2, title:'商品名2', subtitle: 'subsub', detail: 'aaaaaaaaaaaaaaaaaaaa'},
      {id: 3, title:'商品名3', subtitle: 'subsub', detail: 'aaaaaaaaaaaaaaaaaaaa'},
      {id: 4, title:'商品名3', subtitle: 'subsub', detail: 'aaaaaaaaaaaaaaaaaaaa'},
      {id: 5, title:'商品名3', subtitle: 'subsub', detail: 'aaaaaaaaaaaaaaaaaaaa'}

    ]
  }

}
