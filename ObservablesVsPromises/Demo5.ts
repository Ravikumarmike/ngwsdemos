import { Observable, Subject } from "rxjs";

// Observables by default do not share their work between subscribers.
// For example, our use case if you subscribe two times, I will have two random numbers created.
// Not usually what we expect when we first start using RxJS.Let’s look at a different 
// Observable subtype that diverges from this behavior.

var observable = new Observable(observer => {
  observer.next(Math.random());
});

observable.subscribe(v => console.log('consumer A: ' + v));
observable.subscribe(v => console.log('consumer B: ' + v));


// A different Observable subtype that diverges from this behavior.
// Subjects allow subscribers of the Subject to push back or trigger their 
// own events on the Subject.

//  With the Subject instance, we can immediately trigger events outside of the constructor
//  by calling next(). Now anyone can listen or trigger events on the Subject. 

// Notice how we call next and emit 'missed message from Subject' before we have subscribed to 
// the Subject? Subjects, unlike regular Observables, are what we would call "Hot". 
// A hot Observable is an Observable that can start emitting events before you subscribe. 
// This means you can miss previous events that have already emitted.

// Subjects, unlike Observables, share their work with all subscribers. 

const subject = new Subject();

// notify all observers in the list with "hi there"
subject.next('hi there');
// remove observer1 from the list

subject.next('Missed number from Subject: ' + Math.random());

const sub1 = subject.subscribe(v => console.log(`Subscriber 1 ${v}`));
const sub2 = subject.subscribe(v => console.log(`Subscriber 2 ${v}`));

subject.next('Recieved number from Subject: ' + Math.random());

subject.next('Recieved another number from Subject: ' + Math.random());

sub1.unsubscribe();
sub2.unsubscribe();


