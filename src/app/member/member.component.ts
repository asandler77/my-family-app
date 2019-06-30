import { Component, OnInit } from '@angular/core';
import { Human } from '../human';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  person = new Human('Alexey', 'Sandler', 111);
  constructor() { }
  ngOnInit() {
  }
  get currentBook() { return JSON.stringify(this.person); }

}
