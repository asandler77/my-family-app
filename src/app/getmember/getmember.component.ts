import { Component, OnInit } from '@angular/core';
import {MemberService} from "../member/member.service";
import { FormGroup, FormControl} from "@angular/forms";
import {MemberPersonInterface} from "../member/memberPersonInterface";

@Component({
  selector: 'app-getmember',
  templateUrl: './getmember.component.html',
  styleUrls: ['./getmember.component.css']
})
export class GetmemberComponent implements OnInit {

  constructor(private memberService: MemberService) { }
  memberForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  listOfMembers: MemberPersonInterface[] = [];

  newMember: MemberPersonInterface = {} as MemberPersonInterface;

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.memberForm.value.firstName, '  from form');
    this.newMember.firstName = this.memberForm.value.firstName;
    this.newMember.lastName = this.memberForm.value.lastName;
    this.memberService.setMeberInDb(this.newMember).subscribe(member => this.listOfMembers.push());

  }
  ngOnInit() {
  }

}
