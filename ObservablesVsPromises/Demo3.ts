import { Observable, Subscription } from "rxjs";

// Demo 3: Observables have other advantages

let observable =  new Observable((observer) => {
    // track the id of the setTimeout
    var id = setTimeout(() => {
        console.log('Observable timeout hit')
        observer.next(42) 
        console.log("is this data processed or destroyed");
    },1000);
    console.log("observable Started");
    
    // This will be called to tear down the observable if we cancel it
    return () => {
        console.log('dispose called');
        clearTimeout(id);
    };
})


let subscriptionOne: Subscription = observable.subscribe(v => console.log(v));

// unlike promises obsrvables can be cancelled
setTimeout( () => {
    subscriptionOne.unsubscribe()
},500)