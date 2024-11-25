import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
import {SlideShowComponent} from './slide-show/slide-show.component';

@Component({
  selector: 'app-root',
  standalone: true, // Marca el componente como independiente
  imports: [
    RouterOutlet,
    Slide1Component,
    Slide2Component,
    Slide3Component,
    SlideShowComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'microfrontend-presentation';
}
