import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    if (document.getElementById("domuBG")) {
      this.swap();
    }
  }

  swap() {
    const numimages = 40;
    const rndimg = [
      "../assets/header/0.png", "../assets/header/1.png", "../assets/header/2.png", "../assets/header/3.png", "../assets/header/4.png",
      "../assets/header/5.png", "../assets/header/6.png", "../assets/header/7.png", "../assets/header/8.jpg", "../assets/header/9.jpg",
      "../assets/header/10.jpeg", "../assets/header/11.gif", "../assets/header/12.jpg", "../assets/header/13.jpg", "../assets/header/14.jpg",
      "../assets/header/15.jpg", "../assets/header/16.gif", "../assets/header/17.gif", "../assets/header/18.png", "../assets/header/19.jpg",
      "../assets/header/20.png", "../assets/header/21.png", "../assets/header/22.png", "../assets/header/23.png", "../assets/header/24.jpg",
      "../assets/header/25.png", "../assets/header/26.png", "../assets/header/27.jpg", "../assets/header/28.gif", "../assets/header/29.gif",
      "../assets/header/30.jpg", "../assets/header/31.png", "../assets/header/32.png", "../assets/header/33.png","../assets/header/34.JPG", 
      "../assets/header/35.jfif", "../assets/header/36.JPG", "../assets/header/37.gif", "../assets/header/38.gif", "../assets/header/40.PNG"
    ];

    const x = Math.floor(Math.random() * numimages);
    const randomimage = rndimg[x];
    const headerElement = document.getElementById("domuBG") as HTMLElement;
    headerElement.style.backgroundImage = `url(${randomimage})`;
  }

}