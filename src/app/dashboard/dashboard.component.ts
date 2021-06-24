import { Component, OnInit } from '@angular/core';

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
    // this.servers.push({
    //   name: this.newName,
    //   content: this.newContent
    // });
    // this.newName = "";
    // this.newContent ="";
  }

  onAddServerBlueprint() {
    // this.bluePrints.push({
    //   name: this.newName,
    //   content: this.newContent
    // });
    // this.newName = "";
    // this.newContent ="";
  }

}
