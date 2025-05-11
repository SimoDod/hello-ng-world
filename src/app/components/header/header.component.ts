import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OpenAppsComponent } from "./open-apps/open-apps.component";
import { PinnedAppsComponent } from "./pinned-apps/pinned-apps.component";
import { SystemTrayComponent } from "./system-tray/system-tray.component";

@Component({
  selector: 'app-header',
  imports: [ButtonModule, OpenAppsComponent, PinnedAppsComponent, SystemTrayComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
