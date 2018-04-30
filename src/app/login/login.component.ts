import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Login Component - on submit action: ', form.value.log_log);
    console.log(form.value.pass_log);

    this.userService.currentUserName = form.value.log_log;

    this.router.navigate(['/projects']);
  }
}
