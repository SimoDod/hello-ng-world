import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-pinned-apps',
  imports: [NgFor, AvatarModule, AvatarGroupModule],
  templateUrl: './pinned-apps.component.html',
  styleUrl: './pinned-apps.component.scss',
})
export class PinnedAppsComponent {
  pinnedApps = ['raspberry-pi', 'firefox', 'folder', 'terminal'];
}
