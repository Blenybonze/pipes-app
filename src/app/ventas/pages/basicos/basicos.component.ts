import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nomeLower: string = 'bleny';
  nomeUpper: string = 'BLENY';
  nomeCompleto: string = 'bleny bonze';

  fecha: Date = new Date();
}
