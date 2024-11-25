import { Component } from '@angular/core';
import { Slide1Component } from '../slide1/slide1.component';
import { Slide2Component } from '../slide2/slide2.component';
import { Slide3Component } from '../slide3/slide3.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-show',
  standalone: true,
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  imports: [CommonModule, Slide1Component, Slide2Component, Slide3Component]
})
export class SlideShowComponent {
  slides = [Slide1Component, Slide2Component, Slide3Component];
  currentIndex = 0;

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
