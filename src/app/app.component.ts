import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ObserveElementDirective } from './directives/observe-element.directive'
import { NavbarComponent } from './components/navbar/navbar.component'
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, MatIconModule, ObserveElementDirective, NavbarComponent, CardCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() { }


}

