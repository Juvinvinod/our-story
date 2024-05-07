import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm!: FormGroup;
  contactSubscription!: Subscription;

  constructor(private service: ContactService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      mobilenumber: new FormControl('', Validators.required),
      pan_no: new FormControl('', Validators.required),
      adhaar_no: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactSubscription = this.service
        .formSubmit(this.contactForm.value)
        .subscribe({
          next: res => {
            console.log('form submitted', res);
            this.contactForm.reset();
          },
          error: error => {
            console.log(error);
          },
        });
    } else {
      console.log('error');
    }
  }

  ngOnDestroy(): void {
    if (this.contactSubscription) {
      this.contactSubscription.unsubscribe();
    }
  }
}
