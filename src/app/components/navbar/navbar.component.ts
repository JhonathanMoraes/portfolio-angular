import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ObserveElementDirective } from '../../directives/observe-element.directive'
import { isPlatformBrowser } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ObserveElementDirective, MatSidenavModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  getScreenWidth!: number;
  getScreenHeight!: number;

  isMenuOpen: boolean = false

  constructor(@Inject(PLATFORM_ID) private plateformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.plateformId)) {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if (this.getScreenWidth > 900) { 
      this.isMenuOpen = false;
    }
  }
}
