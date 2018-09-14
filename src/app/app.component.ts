import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GABS';
  selectedTab = 0;
  constructor(private router: Router) { }

  goToListaPedidos() {
    this.selectedTab = 0;
  }

  goToDetalhe() {
    this.selectedTab = 1;
  }

  goToWhitelist() {
    this.selectedTab = 2;
  }

  goToListaSitesBloqueados() {
    this.selectedTab = 3;
  }
}
