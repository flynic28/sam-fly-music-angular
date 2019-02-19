import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  name: string;
  email: string;
  message: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.contactForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   message: ['', Validators.required]
    // });
  }

  onSubmit(event: Event) {
    event.stopPropagation();
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.name)
      .append('email', this.email)
      .append('message', this.message);
    console.log(body.toString());
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {}
    );
  }

}
