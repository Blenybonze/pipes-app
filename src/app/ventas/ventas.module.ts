import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { NumerosComponent } from './pages/numeros/numeros.component';
import { IncomunsComponent } from './pages/incomuns/incomuns.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';



@NgModule({
  declarations: [
    NumerosComponent,
    IncomunsComponent,
    BasicosComponent,
    OrdenarComponent
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
