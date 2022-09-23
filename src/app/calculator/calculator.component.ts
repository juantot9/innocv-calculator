import { Component } from '@angular/core';
import buttons, {types} from '../consts/buttons';

const ERROR_MESSAGE = 'This operation cannot be done';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  buttons = buttons;
  calculatorValue: string | number = 0;
  savedValue = 0;
  currentOperation: string = '';

  handleCalculator(buttonValue: string | number, buttonType: string) {
    if(this.calculatorValue === ERROR_MESSAGE) {
      this.calculatorValue = 0;
    }
    if(buttonType === types.NUMBER) {
      this.handleNumber(buttonValue);
    }
    if(buttonType === types.FUNCTION && typeof buttonValue === 'string') {
      this.handleFunction(buttonValue);
    }
    if(buttonType === types.OPERATION && typeof buttonValue === 'string') {
      this.handleOperation(buttonValue);
    }
  }

  handleNumber(buttonValue: string | number) {
    let currentValue = this.calculatorValue.toString();
    this.calculatorValue = Number(currentValue + buttonValue);
  }

  handleFunction(buttonValue: string) {
    switch(buttonValue) {
      case 'Delete':
        if(typeof this.calculatorValue === 'number') {
          let currentValue = this.calculatorValue.toString();
          this.calculatorValue = Number(currentValue.slice(0, -1));
        }
        break;
      case '+/-':
        if(typeof this.calculatorValue === 'number') {
          this.calculatorValue = -1 * this.calculatorValue;
        }
        break;
      case 'C':
        this.calculatorValue = 0;
        break;
      case '.':
        if(!this.calculatorValue.toString().includes('.')) {
          let currentValue = this.calculatorValue.toString();
          this.calculatorValue = currentValue + '.';
        }
        break;
      case '=':
        if(typeof this.calculatorValue === 'number') {
          this.resolveOperation();
          this.currentOperation = '';
        }
        break;
    }
    this.calculatorValue = Array.of<string|number>(Infinity, NaN).includes(this.calculatorValue) ? ERROR_MESSAGE : this.calculatorValue;
  }

  handleOperation(buttonValue: string) {
    switch(buttonValue) {
      case '1/x':
        if(typeof this.calculatorValue === 'number') {
          this.calculatorValue = 1 / this.calculatorValue;
        }
        break;
      case 'x^2':
        if(typeof this.calculatorValue === 'number') {
          this.calculatorValue = this.calculatorValue ** 2;
        }
        break;
      case 'sqrt(x)':
        if(typeof this.calculatorValue === 'number') {
          this.calculatorValue = Math.sqrt(this.calculatorValue);
        }
        break;
      case '/':
        if(typeof this.calculatorValue === 'number') {
          this.savedValue = this.calculatorValue;
          this.calculatorValue = 0;
          this.currentOperation = buttonValue;
        }
        break;
      case 'x':
        if(typeof this.calculatorValue === 'number') {
          this.savedValue = this.calculatorValue;
          this.calculatorValue = 0;
          this.currentOperation = buttonValue;
        }
        break;
      case '+':
        if(typeof this.calculatorValue === 'number') {
          this.savedValue = this.calculatorValue;
          this.calculatorValue = 0;
          this.currentOperation = buttonValue;
        }
        break;
      case '-':
        if(typeof this.calculatorValue === 'number') {
          this.savedValue = this.calculatorValue;
          this.calculatorValue = 0;
          this.currentOperation = buttonValue;
        }
        break;
    }
    this.calculatorValue = Array.of<string|number>(Infinity, NaN).includes(this.calculatorValue) ? ERROR_MESSAGE : this.calculatorValue;
  }

  resolveOperation() {
    if(this.currentOperation === '/' && typeof this.calculatorValue === 'number') this.calculatorValue = this.savedValue / this.calculatorValue;
    if(this.currentOperation === 'x' && typeof this.calculatorValue === 'number') this.calculatorValue = this.savedValue * this.calculatorValue;
    if(this.currentOperation === '-' && typeof this.calculatorValue === 'number') this.calculatorValue = this.savedValue - this.calculatorValue;
    if(this.currentOperation === '+' && typeof this.calculatorValue === 'number') this.calculatorValue = this.savedValue + this.calculatorValue;
  }
}
