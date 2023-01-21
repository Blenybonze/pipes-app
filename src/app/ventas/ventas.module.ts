import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { NumerosComponent } from './pages/numeros/numeros.component';
import { IncomunsComponent } from './pages/incomuns/incomuns.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MaiusculasPipe } from './pipes/maiusculas.pipe';
import { VoaPipe } from './pipes/voa.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    NumerosComponent,
    IncomunsComponent,
    BasicosComponent,
    OrdenarComponent,

    //pipes
    MaiusculasPipe,
    VoaPipe,
    OrdenarPipe
  ],
  exports: [
    NumerosComponent,
    IncomunsComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class VentasModule { }
