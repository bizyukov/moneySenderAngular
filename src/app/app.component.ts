import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';

  constructor( private router: Router) { 
    if(!sessionStorage.getItem('id_token')){//We need to use validation of token, this is just for test
			this.router.navigate(['/']);
		}	
  }
}
