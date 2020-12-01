import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from './notification.model'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationToDoChanged = new Subject<Notification[]>();
  notificationDoneChanged = new Subject<Notification[]>();

  private notificationToDo: Notification[] = [];
  private notificationDone: Notification[] = [];

  constructor() { }

  onSaveData(notification: Notification) {
    this.notificationToDo.push(notification);
    this.notificationToDoChanged.next(this.notificationToDo.slice());
    alert("Your application has been saved")
  }

  getNotificationsToDo() {
    return this.notificationToDo.slice()
  }

  getNotificationsDone() {
    return this.notificationDone.slice()
  }

  updateNotifications(notificationToDo, notificationDone) {
    this.notificationToDo=notificationToDo
    this.notificationDone=notificationDone
  }
}
