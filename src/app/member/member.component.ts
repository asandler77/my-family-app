import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {MemberPersonInterface} from './memberPersonInterface';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private httpService: ApiService) {}

  familyMember: MemberPersonInterface;
  $membersObservable: MemberPersonInterface[]  = [];
  personName: Observable<any>;
  onSubmit() {
    console.log(this.personName + 'personName');
  }

  ngOnInit() {
    // this.httpService.getNameFromDB().subscribe((data: MemberPersonInterface[])  => this.results = data);
     this.httpService.getNameFromDB().subscribe((res: MemberPersonInterface[]) => {
       this.$membersObservable = res;
       console.log(this.$membersObservable,   'my result');
    });
  }
  onSelect(member) {
    this.familyMember = member;
  }
}
