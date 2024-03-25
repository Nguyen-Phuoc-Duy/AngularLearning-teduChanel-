import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnDestroy {
  message = '';
  seconds = 11;
    title = 'Clock'
  ngOnDestroy() { this.clearTimer?.(); } // Gọi hàm clearTimer() khi component bị hủy

  start() { this.countDown(); } // Bắt đầu đếm ngược
  stop()  { // Dừng đếm ngược và cập nhật thông báo
    this.clearTimer?.();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer: VoidFunction | undefined;

  private countDown() { // Hàm đếm ngược
    this.clearTimer?.(); // Dừng bất kỳ đếm ngược nào đang diễn ra trước đó
    const interval = setInterval(() => { // Thiết lập setInterval để giảm giá trị của 'seconds' mỗi giây
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!'; // Khi 'seconds' giảm xuống 0, hiển thị thông báo "Blast off!"
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // Reset 'seconds' khi giá trị âm
        this.message = `T-${this.seconds} seconds and counting`; // Hiển thị thông báo về số giây còn lại
      }
    }, 1000); // Đếm ngược mỗi giây
    this.clearTimer = () => clearInterval(interval); // Lưu hàm clearInterval vào clearTimer để có thể dừng đếm ngược sau này
  }
}
