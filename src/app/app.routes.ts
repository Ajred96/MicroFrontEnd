import {Route} from '@angular/router';
import {Slide1Component} from './slide1/slide1.component';
import {Slide2Component} from './slide2/slide2.component';
import {Slide3Component} from './slide3/slide3.component';
import {SlideShowComponent} from './slide-show/slide-show.component';

export const routes: Route[] = [
  {path: '', component: Slide1Component},
  {path: 'slide2', component: Slide2Component},
  {path: 'slide3', component: Slide3Component},
  {path: 'slide-show', component: SlideShowComponent}
];
