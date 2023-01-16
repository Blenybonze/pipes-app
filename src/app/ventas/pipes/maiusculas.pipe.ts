import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'maiusculas'
})
export class MaiusculasPipe implements PipeTransform {

    transform(value: string, eMaiusculas: boolean = true): string {
        return eMaiusculas
            ? value.toLocaleUpperCase()
            : value.toLocaleLowerCase() ;
    }

}