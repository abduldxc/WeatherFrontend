import { Component, OnInit } from '@angular/core';
import { NotificationType } from '../notification.message';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(private notificationService:  NotificationService) { }

  ngOnInit(): void {
  }
  showMessage(){
    this.notificationService.sendMessage({
      message: "October 12: Heavy rainfall at isolated places very likely over Bihar, Sub-Himalayan West Bengal & Sikkim, Arunachal Pradesh",
      type: NotificationType.info
    });
    this.notificationService.sendMessage({
      message: "Orange Alert for heavy rainfall issued in parts of Uttarakhand",
      type: NotificationType.info
    });
    this.notificationService.sendMessage({
      message: "By Wednesday (October 12), most places of eastern Uttar Pradesh will see rain and thunderstorms",
      type: NotificationType.info
    });
    
  }

}


  
