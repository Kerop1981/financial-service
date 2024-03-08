import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 userDate: FormGroup

 constructor(private readonly authService: AuthService){
  this.userDate = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
  })
 }

 onSumbit(){
  if(this.userDate.valid){
     this.authService.signUp(this.userDate.value)
  } else {
    console.log('not valid')
  }
 }
}
