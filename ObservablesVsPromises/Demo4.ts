import { Observable, Subscription } from "rxjs";

// Demo 4: More Observables advantages
// Since Observables embody the setup and tear down for their data source, 
// you can call them as long as you have access to them

// Whereas with a promise you better have access to whatever 
// function that returned the promise becuase the promise has 
// already executed and cannot be repeated or retried
let promise = new Promise ((resolve) => {
    setTimeout(() => {
        console.log('Promise timeout hit')
        resolve(Math.random()*10) 
    },500);
    console.log("Promise Started");
})


promise.then (x => console.log(x));
// If you were to call promise.then() again it won't run the code again,
// but instead it will return the same value it already had
promise.then (x => console.log(x));


let observable =  new Observable((observer) => {
    // track the id of the setTimeout
    var id = setTimeout(() => {
        console.log('Observable timeout hit')
        observer.next(Math.random()*10) 
    },1000);
    console.log("observable Started");
    
    // This will be called to tear down the observable if we cancel it
    return () => {
        console.log('dispose called');
        clearTimeout(id);
    };
})


let subscriptionOne: Subscription = observable.subscribe(v => console.log(v));


// This will run the observable code again
let subscriptionTwo: Subscription = observable.subscribe(v => console.log(v));

