import { Component } from '@angular/core';
import { HttpRequestService } from 'src/app/http-request.service';
import { ShareService } from 'src/app/share.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user: any = {
    username:""
  };

  constructor(private httpService: HttpRequestService, private share: ShareService, private router: Router) {
    this.httpService.userInfo()
        .subscribe(
          (response) => this.userData(response),
          error => console.log("Error: ", error)
        );
  }

  userData(user){
    this.user = user;
    this.share.doUpdate(this.user);
  }

  logout(){
    sessionStorage.removeItem('id_token');
    this.router.navigate(['/']);
  }

}
