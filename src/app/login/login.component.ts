import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { JwtService } from '../jwt.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public entryForm: FormGroup;
  public errorMsg: string = '';

  constructor(private fb: FormBuilder, private router: Router, private readonly jwtService: JwtService, private readonly rest: RestService) { 
    
    this.entryForm = this.fb.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

 

  ngOnInit(): void {
  }

  logIn() {
    this.rest.logIn({ username: this.entryForm.value.user, password: this.entryForm.value.password}).then(res => {
      if(res.error) {
        this.errorMsg = res.msg;
      } else {
        this.jwtService.setJwt(res.data);
        this.router.navigate(['/inventory'])
      }
    });
  }
 
  // entryClick() {
    // let navigationExtras: NavigationExtras = {
      // queryParams: {
        // user: this.entryForm.value.user,
        // password: this.entryForm.value.password
      // }
    // };
    // this.router.navigate(['/inventory'], navigationExtras);
  // }
}
