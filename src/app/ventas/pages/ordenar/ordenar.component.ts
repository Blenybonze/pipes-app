import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
  eMaiuscula: boolean = true;

  aplicarMaiuscula() {
    this.eMaiuscula = !this.eMaiuscula;
  }
}
