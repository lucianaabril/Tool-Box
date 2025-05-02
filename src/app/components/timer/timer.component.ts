import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})

export class TimerComponent {
  intervalo: any;
  cuentaAtras = false;

  comenzarTimer(): void {
    clearInterval(this.intervalo);
    const display = document.getElementById('display');

    if (!display) return;

    const tiempo = display?.innerText;
    const timeParts = tiempo.split(":").map(Number);

    if (timeParts.length !== 3 || timeParts.some(isNaN)) {
      alert("Formato de tiempo inválido. Usa HH:MM:SS");
      return;
    }

    let totalSegundos = timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];

    if (totalSegundos > 0) {
      this.cuentaAtras = true;
    } else {
      this.cuentaAtras = false;
    }

    this.intervalo = setInterval(() => {
      if (this.cuentaAtras) {
        if (totalSegundos <= 0) {
          clearInterval(this.intervalo);
          display.innerText = "00:00:00";
          alert("⏰ ¡Tiempo terminado!");
          return;
        }
        totalSegundos--;
      } else {
        totalSegundos++;
      }

      display.innerText = this.formatTime(totalSegundos);

    }, 1000);
  }

  formatTime(segundos: number) {
    const h = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const s = String(segundos % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  pararTimer() {
    clearInterval(this.intervalo);
  }

  resetearTimer() {
    clearInterval(this.intervalo);
    const display = document.getElementById('display')
    if (display) {
      display.innerText = "00:00:00";
    }
  }
}