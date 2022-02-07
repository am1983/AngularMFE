import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mfe-root';
  elementUrlUser = 'http://localhost:9001/main.js';
  dataToSend = 'Hello from consuming app';

  dump(event: any) {
    console.dir(typeof (event));
    console.dir(event);
    console.dir(event.detail);
  }
}
