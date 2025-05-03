import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nueva-nota',
  templateUrl: './nueva-nota.component.html',
  styleUrl: './nueva-nota.component.css'
})
export class NuevaNotaComponent {
  contenido: string = '';

  @Output() nueva = new EventEmitter<string>();

  guardarNota() {
    if(this.contenido.trim()) {
      this.nueva.emit(this.contenido); //envía la nota al componente padre (notas.component.ts)
      this.contenido = '';
    }
  }
}
