import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
// tslint:disable-next-line: class-name
export class ProductComponent {

    @Input() product: Product;  // especie de receptor de variables (en este caso..) a iterar
    @Output() productClicked: EventEmitter<any> = new EventEmitter();  //eventemitter necesita valor inicial
    // tslint:disable-next-line: no-trailing-whitespace

    addCart() {
      console.log('Añadir al carrito');
      this.productClicked.emit(this.product.id);
    }
}
