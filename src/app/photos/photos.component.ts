import { Component, OnInit } from '@angular/core';
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
  imageSources: ['../src/assets/mushroom_shelves.jpg', '../src/assets/farm_flowers.jpg'];

  constructor() { }

  ngOnInit() {
    this.transition = 'fadeIn';
  }

}
