import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material';
import {PhotoDialogComponent} from '../../shared/photo-dialog/photo-dialog.component';

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
  imageUrls = [
    'assets/mushrooms-1.jpg',
    'assets/mushrooms-2.jpg',
    'assets/mushrooms-3.jpg',
    'assets/mushrooms-4.jpg',
    'assets/mushrooms-8.jpg',
    'assets/mushrooms-10.jpg',
    'assets/mushrooms-5.jpg',
    'assets/mushrooms-12.jpg'
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.transition = 'fadeIn';
  }

  viewPhoto(imageUrl: string) {
    const dialogRef = this.dialog.open(PhotoDialogComponent, {
      data: {imageUrl: imageUrl},
      width: 'auto',
      position: { top: '2em'},
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
