import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-system-tray',
  imports: [AvatarModule, AvatarGroupModule, NgFor],
  templateUrl: './system-tray.component.html',
  styleUrl: './system-tray.component.scss',
})
export class SystemTrayComponent {
  currentTime = signal(this.getFormattedTime());
  trayIcons = ['pi-wifi', 'pi-cog'];

  private intervalId = setInterval(() => {
    this.currentTime.set(this.getFormattedTime());
  }, 1000);

  private getFormattedTime() {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
