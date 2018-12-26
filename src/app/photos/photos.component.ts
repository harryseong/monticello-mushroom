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
  imageUrlArray = ['https://upload.wikimedia.org/wikipedia/commons/a/a9/Macaca_sinica_-_01.jpg'];

  constructor() { }

  ngOnInit() {
    this.transition = 'fadeIn';
  }
}
