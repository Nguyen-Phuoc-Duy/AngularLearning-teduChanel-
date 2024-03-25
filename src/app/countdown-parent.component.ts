import { Component } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component'; // Import CountdownTimerComponent

@Component({
  selector: 'app-countdown-parent-lv',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button type="button" (click)="timer.start()">Start</button> <!-- Gọi hàm start() của CountdownTimerComponent -->
    <button type="button" (click)="timer.stop()">Stop</button> <!-- Gọi hàm stop() của CountdownTimerComponent -->
    <div class="seconds">{{timer.seconds}}</div> <!-- Hiển thị giá trị của thuộc tính seconds từ CountdownTimerComponent -->
    <div >{{timer.title}}</div>
    <app-countdown-timer #timer></app-countdown-timer> <!-- Tạo một local variable 'timer' đến CountdownTimerComponent -->
  `,
  styleUrls: ['../assets/demo.css']
})
export class CountdownLocalVarParentComponent { }
