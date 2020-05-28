import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  agregarItem = 'Add item';
  items = ['nicolas', 'julian', 'roberto']; // array a recorrer

  addItem() {
    this.items.push(this.agregarItem);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1); // splice (posicion , cuantos a eliminar)
  }
}
