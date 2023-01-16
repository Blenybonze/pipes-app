import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'maiusculas'
})
export class MaiusculasPipe implements PipeTransform {


    transform(value: string, ...args: any[]): string {
        return value.toLocaleUpperCase();
    }

}