import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [1,2,3,4,5]

  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? (this.slides.length - 1) : (this.currentSlide - 1);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : (this.currentSlide + 1);
  }

}
