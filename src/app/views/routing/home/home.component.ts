import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Routing';
  submenu = [{
    name: 'Primary Component',
    path: 'primary'
  }, {
    name: 'Secondary Component',
    path: 'secondary'
  }];

  constructor() { }

  ngOnInit() {
  }

}
