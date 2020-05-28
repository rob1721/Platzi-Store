import { Component } from '@angular/core';

import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  agregarItem = 'Add item';
  items = ['nicolas', 'julian', 'roberto']; // array a recorrer

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
      image: 'assets/images/strickers1.png',
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

  addItem() {
    this.items.push(this.agregarItem);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1); // splice (posicion , cuantos a eliminar)
  }
}
