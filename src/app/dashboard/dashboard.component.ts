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

  name: string = '';
  content: string = '';
  servers: Server[] = [];


  constructor() { }

  ngOnInit(): void {
    this.servers = [
      { name:'TestServer', content: 'This is just a name to test'},
      { name: 'SecondServer', content: 'Another name to test'}
    ]
    console.log(this.servers);
  }

  addServer() {
    this.servers.push(new Server(this.name, this.content));
  }

}
