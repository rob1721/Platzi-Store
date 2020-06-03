import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: any[] = [
    '../../assets/images/banner1.jpg',
    '../../assets/images/banner2.jpg',
    '../../assets/images/banner3.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
