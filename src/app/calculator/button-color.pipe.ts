import { Pipe, PipeTransform } from '@angular/core';
import { types } from '../consts/buttons';

@Pipe({name: 'buttonColor'})
export class ButtonColor implements PipeTransform {
    transform(value: types): string {
        let color: string;
        if(value === types.FUNCTION) {
            color = 'lightgreen';
        } else if (value === types.OPERATION) {
            color = 'lightblue';
        } else if (value === types.NUMBER) {
            color = 'lightgray';
        } else {
            color = 'white';
        }
        return color;
    }
}