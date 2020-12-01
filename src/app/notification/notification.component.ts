import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})

export class NotificationComponent implements OnDestroy, OnInit {

  private filterForm: Subscription
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
    this.filterForm = this.myControl.valueChanges.subscribe(val => {
      switch(val) {
        case 'Sort by category':
          this.sortValCategory()
          break;
        case 'Sort by applicant':
          this.sortValApplicant()
          break;
        case 'Sort by priority':
          this.sortValPriority()
          break;
      }
    })
  }

  sortValCategory() {
    this.todo.sort((a, b) => a.category.localeCompare(b.category))
    this.done.sort((a, b) => a.category.localeCompare(b.category))
  }
  
  sortValApplicant() {
    this.todo.sort((a, b) => a.lastName.localeCompare(b.lastName))
    this.done.sort((a, b) => a.lastName.localeCompare(b.lastName))
  }
  sortValPriority() {
    this.todo.sort((a, b) => a.priority.localeCompare(b.priority))
    this.done.sort((a, b) => a.priority.localeCompare(b.priority))
  }

  ngOnDestroy() {
    this.notificationService.updateNotifications(this.todo, this.done)
    this.filterForm.unsubscribe()
  }
 }
