import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  formSuccess = false;
  formFail = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {}

  onSubmit(event: Event) {
    event.stopPropagation();
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.form.value.name)
      .append('email', this.form.value.email)
      .append('message', this.form.value.message);
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {
        this.formSuccess = true;
        this.form.reset();
      },
      err => {
        this.form.reset();
      }
    );
  }

}
