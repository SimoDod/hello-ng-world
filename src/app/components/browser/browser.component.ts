import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { WindowComponent } from "../window/window.component";

@Component({
  selector: 'app-browser',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, WindowComponent],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.scss',
})
export class BrowserComponent implements OnInit {
  @Input() initialUrl = 'https://evlabsdigital.com/';
  urlInput: string = '';
  safeUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlInput = this.initialUrl;
    this.navigateTo();
  }

  navigateTo() {
    if (
      !this.urlInput.startsWith('http://') &&
      !this.urlInput.startsWith('https://')
    ) {
      this.urlInput = 'https://' + this.urlInput;
    }

    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlInput);
  }

  test() {
    console.log(this.urlInput);
  }
}
