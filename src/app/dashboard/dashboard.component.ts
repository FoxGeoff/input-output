import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export class Server {
  name: string;
  content: string;

  constructor(name: string, content: string) { }
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newName: string = '';
  newContent: string = '';
  servers: Server[] = [];
  bluePrints: Server[] = [];

  // broadcast to parent component, of type EvenEmitter<{...}>() to raise constructor method on the obj
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';


  constructor() { }

  ngOnInit(): void {
    this.servers = [
      { name: 'TestServer', content: 'This is just a name to test' },
      { name: 'SecondServer', content: 'Another name to test' }
    ]
    this.bluePrints = [
      { name: 'TestServer', content: 'This is just a name to test' },
      { name: 'SecondServer', content: 'Another name to test' }
    ]
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBluePrint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
