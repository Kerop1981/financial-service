import { Component } from '@angular/core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent {
  legautIcon = faArrowRightFromBracket

  constructor(public authService: AuthService){}

  logoutHangler(){
    this.authService.logout()
  }
}
