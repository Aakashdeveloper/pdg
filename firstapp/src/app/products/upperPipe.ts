import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'uppercode'
})

export class UpperPipe implements PipeTransform {
    transform(value: string, kind: string) {
        if (kind === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}
