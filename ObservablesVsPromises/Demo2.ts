import { Observable } from "rxjs";

// Demo 2: Observables are lazy but promises are not
// In the example below the promises will fire whereas observables won't 

// The instant you have a promise its going to fire the asynchronous call,
// whether its ajax, an event handler or what have you 
let promise = new Promise ((resolve) => {
    setTimeout(() => {
        console.log('Promise timeout hit')
        resolve(41) 
    },500);
    console.log("Promise Started");
})
// promise.then (x => console.log(x));

// Observables by default are "Cold" meaning they are lazy and won’t run any code until there
// is a subscriber
const observable = new Observable(observer => {
    setTimeout(() => observer.next(42), 1000);
    console.log("observable Started");
  });

// let subscriptionOne: Subscription = observable.subscribe(v => console.log(v));
