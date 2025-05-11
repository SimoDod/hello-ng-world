import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-window',
  imports: [ScrollPanelModule, ButtonModule],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss',
})
export class WindowComponent {
  visible = true;
  showDialog() {}
}
