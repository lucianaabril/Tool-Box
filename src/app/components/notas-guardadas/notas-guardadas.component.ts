import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'notas-guardadas',
  templateUrl: './notas-guardadas.component.html',
  styleUrl: './notas-guardadas.component.css'
})
export class NotasGuardadasComponent {
  @Input() notas: string[] = [];
  @Output() eliminar = new EventEmitter<number>();

  eliminarNota(index: number) {
    this.eliminar.emit(index);
  }
}
