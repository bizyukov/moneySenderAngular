import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  private url: string = 'https://localhost:44330';

  constructor(private http: HttpClient) { }

  createUser(username: string,  email: string, password: string){
    const body = {'username': username, 'password': password, 'email': email};
    return this.http.post( this.url + '/api/users', body); 
  }

  loginUser(email: string, password: string){  
    const body = {'email': email, 'password': password};
    return this.http.post( this.url + '/api/sessions', body); 
  }

  getTransactions(){
    const headers = new HttpHeaders({'Authorization':'Bearer ' + sessionStorage.getItem('id_token')});
    return this.http.get( this.url + '/api/transactions', {'headers': headers}); 
  }

  createTransaction( targetUserId: number, amount: number){
    const headers = new HttpHeaders({'Authorization':'Bearer ' + sessionStorage.getItem('id_token')});
    return this.http.post( this.url + '/api/transactions', 
      {'targetUserId': targetUserId, 'amount': amount}, {'headers': headers}); 
  }

  userInfo(){  
    const headers = new HttpHeaders({'Authorization':'Bearer ' + sessionStorage.getItem('id_token')});
    return this.http.get( this.url + '/api/users', {'headers': headers}); 
  }

  findUsers(username: string, filter: string){
    const headers = new HttpHeaders({'Authorization':'Bearer ' + sessionStorage.getItem('id_token')});
    return this.http.post( this.url + '/api/users/list', 
      {'username': username, 'filter': filter}, {'headers': headers}); 
  }
}
