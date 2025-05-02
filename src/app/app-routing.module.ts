import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotasPageComponent } from './pages/notas-page/notas-page.component';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';
import { CalendarioPageComponent } from './pages/calendario-page/calendario-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'notas', component: NotasPageComponent },
  { path: 'timer', component: TimerPageComponent },
  { path: 'calendario', component: CalendarioPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }