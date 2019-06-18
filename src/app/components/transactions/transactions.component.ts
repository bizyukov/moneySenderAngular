import { Component } from '@angular/core';
import { HttpRequestService } from 'src/app/http-request.service';
import { isArray } from 'util';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/share.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {

  transactions:any;
  user:any;

  constructor(
    private httpService: HttpRequestService,
    private share: ShareService,
    private router: Router
  ) {
    this.getTransactions();
    this.share.onUpdate.subscribe(currentUser=>this.user = currentUser);
  }

  getTransactions() {
    this.httpService.getTransactions()
      .subscribe(
        response => {
          if(isArray(response)){
            this.transactions = response;
          }
        },
        error => console.log("Error: ", error)
      );
  }

  repeatTransaction(transaction){
    this.share.selectedTransaction = transaction;
    this.router.navigate(['/newTransaction']);
  }

}
