import { Component } from '@angular/core';
import { HttpRequestService } from 'src/app/http-request.service';
import { isArray } from 'util';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/share.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [HttpRequestService]
})
export class UsersComponent {

  userName: string = "";
  users: any;

  constructor(
    private httpService: HttpRequestService,
    private share: ShareService,
    private router: Router
  ) { }

  search(username) {
    //todo check if username is not empty
    this.httpService.findUsers(username, "filterBy")
      .subscribe(
        (response) => {
          if (isArray(response)) {
            this.users = response;
          }
        },
        error => console.log("Error: ", error)
      );
  }

  selectUser(user) {
    this.share.selectedUser = user;
    this.router.navigate(['/newTransaction']);
  }

}
