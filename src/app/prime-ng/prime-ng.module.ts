import { NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectButtonModule } from 'primeng/selectbutton';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    SelectButtonModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
