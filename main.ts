
function log(message){
    console.log(message);
}

let message = "Hello world"

log(message);

// To run -- `tsc main.ts && node main.js`


// ############################

// VARIABLES AND TYPES
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3,4,5,6,6];
let f: any[] = [1, true, 'a', false];

// enum
enum Color {Red=0, Green=1, Blue=2}
let backgroundColor = Color.Blue


// Type Assertions
let m;
m="agc";
let endsWithC= (<string> m).endsWith("c");
let alternativeWay= (m as string).endsWith("c");

// Interfaces
// Always use pascal convention
interface Point{
    x: number,
    y: number
}
let drawPoint = (point: Point)=>{
    // ....
}
drawPoint({x:1,y:2})



