import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { HttpRequestService } from './http-request.service';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { HeaderComponent } from './components/header/header.component';
import { ShareService } from './share.service';

const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'users', component: UsersComponent},
  {path:'transactions', component: TransactionsComponent},
  {path:'newTransaction', component: NewTransactionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    TransactionsComponent,
    NewTransactionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [HttpRequestService, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
