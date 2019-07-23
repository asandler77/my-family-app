import { Component, OnInit } from '@angular/core';
import {MemberService} from './member.service';
import {MemberPersonInterface} from './memberPersonInterface';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private httpService: MemberService) {}

  familyMember: MemberPersonInterface ;
  listOfMembers: MemberPersonInterface[]  = [];
  onSubmit(form: NgForm) {
    // this.httpService.setMeberInDb(addedMember).subscribe(member => this.listOfMembers.push());
  }

  ngOnInit() {
     this.httpService.getMembersFromDB().subscribe((res: MemberPersonInterface[]) => {
       this.listOfMembers = res;
       console.log(this.listOfMembers,   'my result');
    });
  }
  onSelect(member: MemberPersonInterface) {
    this.familyMember = member;
  }

}
