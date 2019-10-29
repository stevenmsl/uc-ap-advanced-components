import { Component, AfterContentInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent_17 implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  //Looks like you have to specify the 'static' property 
  //And you have to set the 'static' property to true 
  //so that in ngAfterContentInit method the view child is ready and can be accessed
  @ViewChild('entry', { static: true, read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('tmpl', { static: true, read: TemplateRef}) tmpl: TemplateRef<any>;
  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Motto Todd', //default to this if a match can’t be found
      location: 'UK, England'
    });    
  }

  //14,15
  ngAfterContentInit_14_15() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    //Added at the end of ViewContainerRef hostView list when no index is specified  
    this.entry.createComponent(authFormFactory);
    //Insert at the position 0 of the list
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = 'Create account';
    //dynamic output
    this.component.instance.submitted.subscribe(this.loginUser);
  }




  destroyComponent() {
    console.log(this.component); //Observe __proto__ to locate the destroy method 
    this.component.destroy();
  }

  moveComponent() {
    //ViewContainerRef hostView list now has two elements. 
    //You are moving this component to position 1 in the list.
    this.entry.move(this.component.hostView, 1); //ViewContainerRef hostView list 
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
