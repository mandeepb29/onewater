import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
