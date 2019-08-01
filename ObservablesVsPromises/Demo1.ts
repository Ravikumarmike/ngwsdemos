import { Observable, Subscription } from "rxjs";

// Avoid Including the whole library as its heavy
// import * as Rx from 'rxjs';



// Demo 1: Asynchronous operation using promies.
// Both behave the same way  
let promise = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(41) 
    },500);
    console.log("Promise Started");
})

promise.then (x => console.log(x));

/* Note: It is not common to create Observables like this since there are 
   operators built into RxJS that can shorten down this code. Also if you 
   are using RxJS in Angular, you are likely getting an Observable from 
   the framework.*/
// Exact same thing using observable
const observable = new Observable(observer => {
    setTimeout(() => observer.next(42), 1000);
    console.log("observable Started");
  });

let subscriptionOne: Subscription = observable.subscribe(v => console.log(v));
