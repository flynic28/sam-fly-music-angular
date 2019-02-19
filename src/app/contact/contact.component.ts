import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contactForm: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(event: Event) {
    event.stopPropagation();
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', 'this.contactForm.value.name')
      .append('email', 'this.contactForm.value.email')
      .append('message', 'this.contactForm.value.message');
    console.log(body);
    this.http.post('/', body, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {}
    );
  }

}
