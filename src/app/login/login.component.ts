import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../shared/services/index';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.logout();

    }

    onLoggedin() {
        console.warn(this.model.username);
        console.warn(this.model.password);
        localStorage.setItem('isLoggedin', 'true');
        this.loading = true;
         this.authenticationService.login(this.model.username, this.model.password)
         .subscribe(
                     data => {
                    // this.router.navigate([this.returnUrl]);
                     },
                     error => {
                     //this.alertService.error(error);
                     this.loading = false;
                     });

    }

}
