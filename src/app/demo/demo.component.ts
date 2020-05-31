import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  agregarItem = 'Add item';
  items = ['nicolas', 'julian', 'roberto']; // array a recorrer

  power = 10; // dando valor inicial al power

  ngOnInit(){
    // code
  }

  addItem() {
    this.items.push(this.agregarItem);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1); // splice (posicion , cuantos a eliminar)
  }

}
