import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})

export class NotificationComponent implements OnDestroy, OnInit {

  subscription = Subscription
  myControl = new FormControl();
  options: string[] = ['Sort by category', 'Sort by applicant', 'Sort by priority'];
  
  constructor(private notificationService: NotificationService) {}

  todo = this.notificationService.getNotificationsToDo();
  

  done = this.notificationService.getNotificationsDone();

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  ngOnInit() {
    this.subscription = this.myControl.value.subscribe((value) => {
      this.myControl.value != value? console.log(value): null
      
    })
  }

  ngOnDestroy() {
    this.notificationService.updateNotifications(this.todo, this.done)
    console.log(this.myControl.value)
  }
 }
