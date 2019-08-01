import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgRedux, NgReduxModule} from 'ng2-redux'
import { IAppState, rootReducer, INITIAL_STATE } from './store'
import { SecondaryComponent } from './Secondary/Secondary.component';

@NgModule({
  declarations: [
    AppComponent,SecondaryComponent
],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent,SecondaryComponent]
})
export class AppModule {

  constructor(ngRedux : NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer,INITIAL_STATE);
  }
}
