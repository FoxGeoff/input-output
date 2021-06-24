import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  // type definition as a javascript literal and inputed to parent
  @Input('srvElement') element: { name: string, content: string }; // type same as Server

  servers: Server[]
  bluePrints: Server[]

  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded() {
  //   this.servers.push({
  //     name: this.newName,
  //     content: this.newContent
  //   });
  //   this.newName = "";
  //   this.newContent ="";
  }

  onServerBlueprintAdded() {
  //   this.bluePrints.push({
  //     name: this.newName,
  //     content: this.newContent
  //   });
  //   this.newName = "";
  //   this.newContent ="";
  }

}
