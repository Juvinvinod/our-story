import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiURL = 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';
  constructor(private http: HttpClient) {}

  //post contact details
  formSubmit(inputData: Contact) {
    return this.http.post(this.apiURL, inputData);
  }
}
