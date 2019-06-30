import { Component } from '@angular/core';
import { Human } from './Human';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-family-app';
  human: Human = {
    id: 123,
    name: 'Alexey',
    familyName: 'Sandler'
  };
}


