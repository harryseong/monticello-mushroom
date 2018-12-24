import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  imageSources: ['../src/assets/mushroom_shelves.jpg', '../src/assets/farm_flowers.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
