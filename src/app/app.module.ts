import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { AppRouterModule } from './app-router.module';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localEs from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
