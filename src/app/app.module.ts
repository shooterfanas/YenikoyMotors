import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatSelectModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { MarkaComponent } from './components/marka/marka.component';
import { NgxPopper } from 'angular-popper';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MotosikletComponent } from './components/motosiklet/motosiklet.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { KlasikaracComponent } from './components/klasikarac/klasikarac.component';
import { SporComponent } from './components/spor/spor.component';
import { AraziComponent } from './components/arazi/arazi.component';
import { BinekComponent } from './components/binek/binek.component';
import { IkielComponent } from './components/ikiel/ikiel.component';
import { SifirComponent } from './components/sifir/sifir.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarkaComponent,
    IletisimComponent,
    MotosikletComponent,
    MenuComponent,
    InfoComponent,
    FooterComponent,
    HeaderComponent,
    KlasikaracComponent,
    SporComponent,
    AraziComponent,
    BinekComponent,
    IkielComponent,
    SifirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
