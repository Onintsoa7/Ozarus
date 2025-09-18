import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule
  ]
})
export class HeaderComponent {
  isMenuOpen = false;
  isMobile = false;
  logo = "assets/icon/logo.svg";

  @HostListener('window:resize')
  onResize() {
    // this.isMobile = window.innerWidth <= 768;
    // if (!this.isMobile) this.isMenuOpen = false;
  }

  ngOnInit() {
    this.onResize();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
