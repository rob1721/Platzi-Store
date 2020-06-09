import { Injectable } from '@angular/core';

import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 19990,
      description: 'Esta es una camiseta'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 12990,
      description: 'Este es un hoodie'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Taza',
      price: 1990,
      description: 'Esta es una taza/mug'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Broche',
      price: 1000,
      description: 'Este es un broche/pin'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Sticker Platzi',
      price: 790,
      description: 'Este es un sticker1'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Sticker Nunca Pares de Aprender',
      price: 790,
      description: 'Este es un sticker2'
    }
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  // devuelve el item por id
  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
