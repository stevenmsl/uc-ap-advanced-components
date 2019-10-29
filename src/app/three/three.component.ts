import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-three',
  //No encapsulation. So the example-one style bleeds in to all three instances of “Example 1”
  encapsulation: ViewEncapsulation.None, 
  styles: [`
    .example-one {
      border: 2px solid green;
    }
  `],
  template: `
    <div class="example-three">
      Example Three
    </div>
    <div class="example-one">
      Example One!
    </div>
  `
})
export class ExampleThreeComponent {

}
