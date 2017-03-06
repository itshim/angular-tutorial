import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('Himanshu',[Validators.required, Validators.minLength(2)]),
    phone: new FormControl('9610831889',[Validators.required, Validators.pattern('^[6-9][0-9]{9}$')])
  });
  constructor() { }

  ngOnInit() {
  }

}
