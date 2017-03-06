import { Component, OnInit } from '@angular/core';
import {Form, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  onSubmit(value: any) {
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
