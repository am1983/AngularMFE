import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() dataFromConsumingApp: string = '';
  @Output() dataToReturnToConsumingApp = new EventEmitter<string>();
  inputText: string = '';
  title = 'angular-sub-mfe-user';

  send() {
    this.dataToReturnToConsumingApp.emit(this.inputText);
    this.inputText = '';
  }
}
