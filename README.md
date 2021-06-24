# InputOutput

1. Katat project for @OutPut() and @InPut()  directives

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Project Refereneces

1. Video Safari - Angular (full App) with Angular Material, Angulafire and NgRx (also good)
2. Angular - The Complete Guide 2020
3. Link <https://learning.oreilly.com/videos/angular-the-complete/9781788998437/9781788998437-video5_9/>

### Task: Add Bootstrap

1. Run ```npm i bootstrap```

### Task: Add sever item components

### Kanban Task: Chapter 5 : Components and Databinding Deep Dive

## Task: Binding to custom properties

1. Comment out the two method code in the parent
2. In parent copy over the methods onAddServer() and onAddBlueprint() from parent: dashboard.component
3. onAddServer() and onAddBlueprint() to the child: server-list-component (commented out)
4. Move the template for server element lists to child component
5. We are now missing on the child component the definition of an 'element' (and collections of 'elements'; servers and bluePrints
6. Now let's setup an alias name 'srvElement' for the exposed child element prop

### Binding to a Custom Property - passing a value from the parent @Input to the child

```TypeScript
// Child
export class ServerListComponent implements OnInit {

  // type definition as a javascript literal and inputed to parent
  @Input('srvElement') element: { name: string, content: string }; // type same as Server
  ...
```

```TypeScript
// Parent
export class DashboardComponent implements OnInit {

  // now lets use for the collection an example javascript literal
  serverElements = [
    {name: 'Testserver', content: 'test text'}
  ];
```

```HTML
<!-- Parent -->
<app-server-list
  *ngFor="let serverElement of serverElements"
  [srvElement]="serverElement"
></app-server-list>
```
