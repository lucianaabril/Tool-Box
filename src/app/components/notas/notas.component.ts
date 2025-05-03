import { Component } from '@angular/core';

@Component({
  selector: 'notas',
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  notas: string[] = []; //arreglo que se muestra en notas-guardadas

  agregarNota(nueva: string) {
    this.notas.unshift(nueva); //mete la nota al arreglo
  }

  eliminarNota(index: number) {
    this.notas.splice(index, 1);
  }
}
