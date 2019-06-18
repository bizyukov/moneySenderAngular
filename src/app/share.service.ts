import {EventEmitter} from '@angular/core';

export class ShareService {
  onUpdate:EventEmitter<any> = new EventEmitter();
  currentUser:any;
  _selectedUser:any;
  _selectedTransaction:any;

  public doUpdate(user){
	  this.currentUser = user;
    this.onUpdate.emit(this.currentUser);
  }

  get selectedUser(){
	  return this._selectedUser;
  } 

  set selectedUser(user){
	  this._selectedUser = user;
  } 

  get selectedTransaction(){
	  return this._selectedTransaction;
  } 

  set selectedTransaction(transaction){
	  this._selectedTransaction = transaction;
  } 

}