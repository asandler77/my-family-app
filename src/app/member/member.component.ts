import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  constructor(private httpService: ApiService) {}
  id = '5d338329e5b5e441785d6aca';
  result: any;
  personName: Observable<any>;
  onSubmit() {
    console.log(this.personName + 'personName');


  }

  ngOnInit() {
    this.result = this.httpService.getNameFromDB().subscribe(data => this.result = data);
    console.log(JSON.stringify(this.result) + 'myyyy result');
    return this.result;
  }

  // get showDB() {
  //
  // }
  // get dbDocs() { return JSON.stringify(this.person); }
}
