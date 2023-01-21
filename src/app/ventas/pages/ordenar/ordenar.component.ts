import { Component } from '@angular/core';
import { Color, Heroi } from '../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {


  eMaiuscula: boolean = true;
  ordenarPor: string = 'nome';

  herois: Heroi[] = [
    {
      nome: 'Superman',
      voa: true,
      cor: Color.azul
    },
    {
      nome: 'Batman',
      voa: false,
      cor: Color.preto
    },
    {
      nome: 'Robin',
      voa: false,
      cor: Color.verde
    },
    {
      nome: 'Daredevil',
      voa: false,
      cor: Color.vermelho
    },
  ];

  aplicarMaiuscula() {
    this.eMaiuscula = !this.eMaiuscula;
  }

  ordenar(valor: string) {
    this.ordenarPor = valor;
  }
}
