import {Subject,ReplaySubject,BehaviorSubject} from "rxjs"
// Regular Subject
console.log(">>>>>>Regular Subject<<<<<<<<<")
const subject = new Subject();

subject.next('Missed number from Subject: ' + Math.random());

subject.subscribe(v => console.log(v));

subject.next('Recieved number from Subject: ' + Math.random());

console.log(">>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<\n")

// What if we subscribe late to our Subject and want to get the previous value we missed? 
// Well, that’s where our next Subject type comes in, the ReplaySubject.
// Unlike the regular Subject ReplaySubject will replay the last event emitted if you 
// subscribe late to the ReplaySubject.
// The ReplaySubject replays the last value emitted we had missed.
console.log(">>>>>>Replay Subject<<<<<<<<<")

const replaySubject = new ReplaySubject();

replaySubject.next('Missed number from Replay Subject: ' + Math.random());

replaySubject.subscribe(v => console.log(v));

replaySubject.next('Recieved number from Replay Subject: ' + Math.random());

console.log(">>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<\n")


// The BehaviorSubject builds on top of the same functionality as our ReplaySubject. 
// The BehaviorSubject adds one more piece of functionality in that you can give the
// BehaviorSubject an initial value. 
// This initial value will be replayed to any subscribers until a new value is emitted then 
// the new value will be replayed for all new subscribers.
// BehaviorSubject is a fairly common subject to use in application with reactive programming 
// styles where we want to have some central state/information shared throughout our code

console.log(">>>>>>Behavior Subject<<<<<<<<<")

const behaviorSubject = new BehaviorSubject('Initial value from Behavior Subject: ' + Math.random());

behaviorSubject.subscribe(v => console.log(v));

behaviorSubject.next('Recieved number from Behavior Subject: ' + Math.random());

console.log(">>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<\n")
