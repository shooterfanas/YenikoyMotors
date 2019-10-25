import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MarkaComponent } from './components/marka/marka.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { MotosikletComponent } from './components/motosiklet/motosiklet.component';
import { InfoComponent } from './components/info/info.component';
import { KlasikaracComponent } from './components/klasikarac/klasikarac.component';
import { SporComponent } from './components/spor/spor.component';
import { AraziComponent } from './components/arazi/arazi.component';
import { BinekComponent } from './components/binek/binek.component';
import { IkielComponent } from './components/ikiel/ikiel.component';
import { SifirComponent } from './components/sifir/sifir.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home/:id', component: InfoComponent
  },
  {
    path: 'marka', component: MarkaComponent
  },
  {
    path: 'marka/:id', component: InfoComponent
  },
  {
    path: 'iletisim', component: IletisimComponent
  },
  {
    path: 'motosiklet', component: MotosikletComponent
  },
  {
    path: 'motosiklet/:id', component: InfoComponent
  },
  {
    path: 'klasikarac', component: KlasikaracComponent
  },
  {
    path: 'klasikarac/:id', component: InfoComponent
  },
  {
    path: 'spor', component: SporComponent
  },
  {
    path: 'spor/:id', component: InfoComponent
  },
  {
    path: 'arazi', component: AraziComponent
  },
  {
    path: 'arazi/:id', component: InfoComponent
  },
  {
    path: 'binek', component: BinekComponent
  },
  {
    path: 'binek/:id', component: InfoComponent
  },
  {
    path: 'ikiel', component: IkielComponent
  },
  {
    path: 'ikiel/:id', component: InfoComponent
  },
  {
    path: 'sifir', component: SifirComponent
  },
  {
    path: 'sifir/:id', component: InfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MotosikletComponent, InfoComponent];