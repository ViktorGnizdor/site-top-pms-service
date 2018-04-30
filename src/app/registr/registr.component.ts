import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {
  name: string;
  surname: string;
  login: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

}
