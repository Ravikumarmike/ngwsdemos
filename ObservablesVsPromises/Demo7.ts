// https://www.learnrxjs.io/operators/error_handling/retrywhen.html

// Import a module for its side effects only
// Import an entire module for side effects only, without importing any bindings.
// This runs the module's global code, but doesn't actually add any bindings to your project.
import { Subscription, interval, timer } from "rxjs";
import { map, retryWhen, delayWhen, tap } from 'rxjs/operators';

// Demo 5: Yet another Observables advantage
// Since Observables embody the setup and tear down for their data source,
// if you have an error you simply subscribe to it and retry it 
// or simply use one of the retry operators (such as retry or retrywhen) 

//emit value every 1s
const source = interval(1000).pipe(
  map(val => {
    if (val > 5) {
      //error will be picked up by retryWhen
      throw val;
    }
    return val;
  }),
  retryWhen(errors => errors
    //log error message
    .pipe(
      tap(val => console.log(`Value ${val} was too high!`)),
      //restart in 5 seconds
       delayWhen(val => timer(val * 1000))
    ))
);
 let subscribe: Subscription = source.subscribe(val => console.log(val));