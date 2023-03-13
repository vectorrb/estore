import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() {
    alertify.set('notifier','position', 'top-right');
    alertify.set('notifier','delay', 2);
   }

  success(message: string) {
    alertify.success(message);
  }
  error(message: string) {
    alertify.error(message);
  }
    warning(message: string) {
    alertify.warning(message);
  }





}
