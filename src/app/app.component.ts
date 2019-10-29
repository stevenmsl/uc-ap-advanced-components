import { Component, AfterContentInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  };

  addProp() {
    this.user.email = 'blink@blink-182.net';
  }
  changeName() {
    this.user.name = 'Travis Barker';
  }
  changeUser() { //will be detected by both components as the entire object is re-created.
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'California'
    };
  }
 
}
