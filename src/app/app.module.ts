import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormModule } from './auth-form/auth-form.module';
import { ExampleOneComponent } from './one/one.component';
import { ExampleTwoComponent } from './two/two.component';
import { ExampleThreeComponent } from './three/three.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
