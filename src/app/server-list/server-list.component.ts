import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer() {
  //   this.servers.push({
  //     name: this.newName,
  //     content: this.newContent
  //   });
  //   this.newName = "";
  //   this.newContent ="";
  // }

  // onAddServerBlueprint() {
  //   this.bluePrints.push({
  //     name: this.newName,
  //     content: this.newContent
  //   });
  //   this.newName = "";
  //   this.newContent ="";
  // }
}
