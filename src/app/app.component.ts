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
    { name: 'Testserver', content: 'test text' }
  ];

  // method #1 for events raised by button click() on child
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // method #2 for events raised by button click() on child
  onServerBlueprintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

}
