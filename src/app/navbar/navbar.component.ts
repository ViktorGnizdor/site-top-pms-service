import { Component, OnInit, Input } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { Router } from '@angular/router';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  log: String = 'LogOut';

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
