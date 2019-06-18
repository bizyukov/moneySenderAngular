import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/http-request.service';
import { ShareService } from 'src/app/share.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  sender: any = {
    username:""
  };

  addresser: any = {
    username:""
  };

  selectedTransaction: any;
  amount:number;

  constructor(private httpService: HttpRequestService, private share: ShareService, private router: Router) {
    this.share.onUpdate.subscribe(currentUser=>this.sender = currentUser);
  }

  ngOnInit() {
    if(!this.share.selectedUser && !this.share.selectedTransaction){
      this.router.navigate(['/']);
    }
    else{
      if(this.share.selectedUser){
        this.addresser = this.share.selectedUser;
      }
      else if(this.share.selectedTransaction){
        this.selectedTransaction = this.share.selectedTransaction;
        this.addresser = {
          id: this.selectedTransaction.targetUserId,
          username: this.selectedTransaction.targetUserName,
          balance: this.selectedTransaction.targetUserBalance
        }

        this.amount = this.selectedTransaction.amount;
      }
    }
  }

  send(userId, amount){
    this.httpService.createTransaction(userId, amount)
        .subscribe(
          response => this.router.navigate(['/']),
          error => console.log("Error: ", error)
        );
  }
}
