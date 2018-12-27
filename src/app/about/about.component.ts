import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material';
import {PhotoDialogComponent} from '../../shared/photo-dialog/photo-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('transitionAnimations', [
      transition('* => fadeIn', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  transition = '';
  imageUrls = [
    'assets/mushrooms_1x1-1.jpg',
    'assets/mushrooms_1x1-2.jpg',
    'assets/mushrooms_1x1-3.jpg'
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.transition = 'fadeIn';
  }

  viewPhoto(imageUrl: string) {
    const dialogRef = this.dialog.open(PhotoDialogComponent, {
      data: {imageUrl: imageUrl},
      width: 'auto',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
