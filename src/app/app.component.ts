import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output';
  
  // now lets use for the collection an example javascript literal
  serverElements = [
    {name: 'Testserver', content: 'test text'}
  ];
}
