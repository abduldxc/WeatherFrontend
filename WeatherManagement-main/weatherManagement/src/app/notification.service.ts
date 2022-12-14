import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { NotificationMessage, NotificationType } from './notification.message';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject: Subject<NotificationMessage> = new Subject<NotificationMessage>();
  sendMessage(message: NotificationMessage){
    this.notificationSubject.next(message);
  }

  constructor(private toastrService: ToastrService) { 
    this.notificationSubject.subscribe(message =>{
      switch(message.type){
        case NotificationType.info:
          this.toastrService.info(message.message);
          break;
      }
    }, err => {
      console.log('Error');
    });
  }
}

  