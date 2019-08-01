import { Subject } from "rxjs";
import { Observable } from 'rxjs';

// Import a module for its side effects only
// Import an entire module for side effects only, without importing any bindings.
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { map, filter } from "rxjs/operators";


// Demo 0: Subject vs Observable

// Demo 0-1: Subject

// Subject is generic, so we have to define the type of the payload
let subject = new Subject<string>();

subject.pipe(
        map(value => value + "Appended by the mapping operator"),
        // remove map or change condition to endWith('operator') otherwise the stream will be empty
        filter(value => {
          return value.endsWith('...') ?  true: false;
        })
       )
       .subscribe(
          value => {
            // value is the value of the received data
            console.log(value);
          },
          e => {
            console.error(e)
          },
          () =>{
            console.log('complete')
          }
      );

subject.next('String to be broadcasted to subscribers...');
subject.complete();


// Demo 0-2: Observable
// As mentioned before, subscribing to the subject itself does totally work. 
// The subject itself however, should never leave the place it was created. 
// For example, you should not return the subject in a function. Otherwise, it becomes hard to understand, 
// where new values enter the stream.

// For that reason, the library contains the observable. Thankfully converting a subject to an observable is very easy.
// Just call the asObservable() method. That way, the caller of the function can only subscribe, but not publish.

// function getObservable(): Observable<string>{
//   const subject = new Subject<string>();
  
//   setTimeout(() => {
//     subject.next('String to be broadcasted to subscribers...');
//     subject.complete();
//   },500);

//   return subject.asObservable()
//                 .map(value => value + "Appended by the mapping operator")
//                 .filter(value => {
//                   return value.endsWith('...') ?  true: false;
//                 });
// }

// let  source = getObservable().subscribe(
//   value => {
//     // value is the value of the received data
//     console.log(value);
//   },
//   e => {
//     console.error(e)
//   },
//   () =>{
//     console.log('complete')
//   }
// );

