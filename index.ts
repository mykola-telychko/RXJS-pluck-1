import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

//https://www.learnrxjs.io/learn-rxjs/operators/transformation/pluck
// Example 1: Pluck object property

const srcObj$ = from([
  { name: 'Joe', age: 30 },
  { name: 'Sarah', age: 35 },
]);
//grab names
const example = srcObj$.pipe(pluck('name'));
//output: "Joe", "Sarah"
const subscribe = example.subscribe((val) => console.log(val));
