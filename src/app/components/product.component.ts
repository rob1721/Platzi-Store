import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
// tslint:disable-next-line: class-name
export class ProductComponent implements OnInit, DoCheck, OnDestroy{

    @Input() product: Product;  // especie de receptor de variables (en este caso..) a iterar
    @Output() productClicked: EventEmitter<any> = new EventEmitter();  // eventemitter necesita valor inicial
    // tslint:disable-next-line: no-trailing-whitespace

    constructor(){
      console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChanges){
    //   console.log('2. ngOnChanges');
    //   console.log(changes);
    // }

    ngOnInit() {
      console.log('3. ngOnInit');
    }

    ngDoCheck() {
      console.log('4. ngDoCheck');
    }

    ngOnDestroy() {
      console.log('5. ngOnDestroy');
    }

    addCart() {
      console.log('Añadir al carrito');
      this.productClicked.emit(this.product.id);
    }
}
