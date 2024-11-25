import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-slide1',
  standalone: true,  // Componente independiente
  templateUrl: './slide1.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./slide1.component.scss']
})
export class Slide1Component { }
