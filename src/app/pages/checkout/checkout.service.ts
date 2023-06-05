import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private nextStepSubject = new Subject<void>();

  nextStep$ = this.nextStepSubject.asObservable();

  nextStep() {
    this.nextStepSubject.next();
  }
}
