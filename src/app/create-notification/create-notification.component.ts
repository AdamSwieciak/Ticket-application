import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})

// export interface Notification {
//   category: string,
//   firstName: string,
//   lastName: string,
//   priority: string,
// }

export class CreateNotificationComponent {
  addressForm = this.fb.group({
    category: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    priority: [null, Validators.required],
  });


  hasUnitNumber = false;

  categorys = [
    {name: 'Computer'},
    {name: 'Network'},
    {name: 'Domain controler'},
    {name: 'Office'},
    {name: 'Outlook'},
    {name: 'Other'},
  ];

  prioritys = [
    {length: '1-3d'},
    {length: '1-5d'},
    {length: '1-20d'},
    {length: '1-30d'},
  ]

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.addressForm.value['category'])
  }
}
