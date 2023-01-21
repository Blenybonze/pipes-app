import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'voa'
})
export class VoaPipe implements PipeTransform {

    transform(voa: boolean): string {
        return voa
            ? 'Voa'
            : 'Não voa';
    }

}