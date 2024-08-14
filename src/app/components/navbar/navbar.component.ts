import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID, ChangeDetectionStrategy } from '@angular/core';
import { ObserveElementDirective } from '../../directives/observe-element.directive'
import { isPlatformBrowser } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navbar',
  standalone: true,
  imports: [ObserveElementDirective, MatSidenavModule, MatIconModule, MatExpansionModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  getScreenWidth: number = 0;
  getScreenHeight: number = 0;

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

    if (this.getScreenWidth > 800) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isMenuOpen = false;
  }
}
