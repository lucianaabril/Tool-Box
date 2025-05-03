import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserModule } from '@angular/platform-browser';
import { ToolsComponent } from './components/tools/tools.component';
import { IntroComponent } from './components/intro/intro.component';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';
import { NotasPageComponent } from './pages/notas-page/notas-page.component';
import { CalendarioPageComponent } from './pages/calendario-page/calendario-page.component';
import { TimerComponent } from './components/timer/timer.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NotasComponent } from './components/notas/notas.component';
import { NuevaNotaComponent } from './components/nueva-nota/nueva-nota.component';
import { NotasGuardadasComponent } from './components/notas-guardadas/notas-guardadas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    IntroComponent,
    ToolsComponent,
    TimerPageComponent,
    NotasPageComponent,
    CalendarioPageComponent,
    TimerComponent,
    CalendarioComponent,
    NotasComponent,
    NuevaNotaComponent,
    NotasGuardadasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }