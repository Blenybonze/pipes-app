import { Pipe, PipeTransform } from '@angular/core';
import { Heroi } from '../pages/interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(herois: Heroi[], ordenarPor: string): Heroi[] {

    switch (ordenarPor) {
      case 'nome':
        return herois.sort((a, b) => (a.nome > b.nome) ? 1 : -1)
      case 'voa':
        return herois.sort((a, b) => (a.voa > b.voa) ? 1 : -1)
      case 'cor':
        return herois.sort((a, b) => (a.cor > b.cor) ? 1 : -1)

      default:
        return herois;
    }
  }

}
