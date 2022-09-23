export enum types {
    NUMBER = "number",
    FUNCTION = "function",
    OPERATION = "operation"
};

interface Button {
    type: types;
    value: number | string;
    cols: number;
    rows: number;
};

const buttons: Array<Button> = [
    {type: types.OPERATION, value : "%", cols: 1, rows: 1},
    {type: types.FUNCTION, value : "C", cols: 1, rows: 1},
    {type: types.FUNCTION, value : "Delete", cols: 2, rows: 1},
    {type: types.OPERATION, value : "1/x", cols: 1, rows: 1},
    {type: types.OPERATION, value : "x^2", cols: 1, rows: 1},
    {type: types.OPERATION, value : "sqrt(x)", cols: 1, rows: 1},
    {type: types.OPERATION, value : "/", cols: 1, rows: 1},
    {type: types.NUMBER, value : 7, cols: 1, rows: 1},
    {type: types.NUMBER, value : 8, cols: 1, rows: 1},
    {type: types.NUMBER, value : 9, cols: 1, rows: 1},
    {type: types.OPERATION, value : "x", cols: 1, rows: 1},
    {type: types.NUMBER, value : 4, cols: 1, rows: 1},
    {type: types.NUMBER, value : 5, cols: 1, rows: 1},
    {type: types.NUMBER, value : 6, cols: 1, rows: 1},
    {type: types.OPERATION, value : "-", cols: 1, rows: 1},
    {type: types.NUMBER, value : 1, cols: 1, rows: 1},
    {type: types.NUMBER, value : 2, cols: 1, rows: 1},
    {type: types.NUMBER, value : 3, cols: 1, rows: 1},
    {type: types.OPERATION, value : "+", cols: 1, rows: 1},
    {type: types.FUNCTION, value : "+/-", cols: 1, rows: 1},
    {type: types.NUMBER, value : 0, cols: 1, rows: 1},
    {type: types.FUNCTION, value : ".", cols: 1, rows: 1},
    {type: types.FUNCTION, value : "=", cols: 1, rows: 1},
];

export default buttons;