import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userDate: FormGroup

  constructor(private readonly authService: AuthService){
   this.userDate = new FormGroup({
     email: new FormControl('', [Validators.required, Validators.email]),
     password: new FormControl('', [Validators.required,Validators.minLength(6)]),
   })
  }
 
  onSumbit(){
    if(this.userDate.valid){
       this.authService.login(this.userDate.value)
    } else {
      console.log('not valid')
    }
   }
}
