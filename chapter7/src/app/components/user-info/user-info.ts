import {
  Component, ViewEncapsulation, Input,
  OnInit, OnDestroy, OnChanges
  } from '@angular/core';

@Component({
  selector: 'user-info',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: ['app/components/user-info/user-info.css'],
  templateUrl: 'app/components/user-info/user-info.html'
})

export class UserInformation implements OnInit, OnDestroy, OnChanges {

  @Input() user;

  fontSize = '20px';
  editMode = false;
  randomNumber;

  ngOnInit(){
    console.log('UserInformation initialized');
  }

  ngOnDestroy(){
    console.log('UserInformation Destroy');
  }

  ngOnChanges(changes){
    console.log('onChanges', changes);
  }
  
  getRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 128);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  onSubmit(data) {
    Object.assign(this.user, data);
    this.editMode = false;
  }
}