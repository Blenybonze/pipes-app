import { Pipe, PipeTransform } from '@angular/core';
import { Heroi } from '../pages/interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroi: Heroi[], ...args: string[]): Heroi[] {
    heroi = heroi.sort((a, b) => (a.nome > b.nome) ? 1 : -1)
    return heroi;
  }

}
