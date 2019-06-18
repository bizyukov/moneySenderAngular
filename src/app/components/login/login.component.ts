import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/http-request.service';
import {Router} from '@angular/router'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	name: string;
	speed: number;
	model: string;
	isSignUp:boolean = false;
	error:any;

	constructor(private httpService: HttpRequestService, private router: Router) { }

	ngOnInit() {
		if(sessionStorage.getItem('id_token')){//We need to use validation of token, this is just for test
			this.router.navigate(['users']);
		}		
	}

	signUp(username: string, email: string, password: string){
		if(!this.isSignUp){
			//this.isSignUp = true;
		} else {
			this.httpService.createUser(username, email, password)
				.subscribe(
				(response) => this.checkResponse(response),
				error => this.error = JSON.stringify(error)
				);
		}
	}

	signIn(email: string, password: string){
		this.httpService.loginUser( email, password )
				.subscribe(
				(response:any) => this.checkResponse(response),
				error => this.error = JSON.stringify(error)
				);
	}

	checkResponse(response){
		if(response && response.id_token){
			sessionStorage.setItem('id_token', response.id_token);
			this.router.navigate(['users']);
		}
	}
}
