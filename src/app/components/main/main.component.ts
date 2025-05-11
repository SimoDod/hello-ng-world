import { Component } from '@angular/core';
import { BrowserComponent } from "../browser/browser.component";

@Component({
  selector: 'app-main',
  imports: [BrowserComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
