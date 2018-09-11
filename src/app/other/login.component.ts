import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {

    username = '';
    password = '';
    remember = false;
    hide = true;

    constructor() {

    }

    login() {
    }

    ngOnInit() { }

    ngOnDestroy() {

    }
}
