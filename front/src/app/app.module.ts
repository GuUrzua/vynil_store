import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'

const angularMaterial = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
