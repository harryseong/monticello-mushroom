import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  animations: [
    trigger('transitionAnimations', [
      transition('* => fadeIn', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ])
    ])
  ]
})
export class PhotosComponent implements OnInit {
  transition = '';
  images = [
    'assets/mushrooms-1.jpg',
    'assets/mushrooms-2.jpg',
    'assets/mushrooms-3.jpg',
    'assets/mushrooms-4.jpg',
    // 'assets/mushrooms-6.jpg',
    // 'assets/mushrooms-7.jpg',
    'assets/mushrooms-8.jpg',
    // 'assets/mushrooms-9.jpg',
    'assets/mushrooms-10.jpg',
    'assets/mushrooms-5.jpg',
    // 'assets/mushrooms-11.jpg',
    'assets/mushrooms-12.jpg'
  ];

  constructor() { }

  ngOnInit() {
    this.transition = 'fadeIn';
  }
}
