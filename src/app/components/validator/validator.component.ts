import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
   this.form = this.fb.group({
      pageRange: ['', [Validators.required, Validators.pattern('^[0-9,-]*$')]]
    });
   }
  ngOnInit() {
  }
get pageRange() {
  return this.form.get('pageRange');
}
}
