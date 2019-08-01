import { Component, OnDestroy } from '@angular/core';
import {NgRedux} from 'ng2-redux'
import { IAppState } from "./store";
import { INCREMENT } from "./actions";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy { // <- New
  counter:number =0;
  subscription:Subscription;

  constructor(private ngRedux : NgRedux<IAppState>) {
    this.subscription = ngRedux.select<number>('counter')
    .subscribe(newCount => this.counter = newCount);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    // If for example someone posted something we can parse body, subject,etc.
    // this.ngRedux.dispatch({type:'INCREMENT',body:'',subject:''})

    // Remember that we never actually modify the state but instead we let the
    // store deal with that
    // this.counter++;

    // Instead of modifying the state directly we dispatched an action
    this.ngRedux.dispatch({type:'INCREMENT'})
  }
}
