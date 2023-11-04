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
      "../assets/header/10.jpg", "../assets/header/11.gif", "../assets/header/12.jpg", "../assets/header/13.jpg", "../assets/header/14.jpg",
      "../assets/header/15.jpg", "../assets/header/16.gif", "../assets/header/17.gif", "../assets/header/18.png", "../assets/header/19.jpg",
      "../assets/header/20.png", "../assets/header/21.png", "../assets/header/22.png", "../assets/header/23.png", "../assets/header/24.jpg",
      "../assets/header/25.png", "../assets/header/26.png", "../assets/header/27.jpg", "../assets/header/28.gif", "../assets/header/29.gif",
      "../assets/header/30.jpg", "../assets/header/31.png", "../assets/header/32.png", "../assets/header/33.png","../assets/header/34.jpg", 
      "../assets/header/35.jpg", "../assets/header/36.jpg", "../assets/header/37.gif", "../assets/header/38.gif", "../assets/header/40.png"
    ];

    const x = Math.floor(Math.random() * numimages);
    const randomimage = rndimg[x];
    const headerElement = document.getElementById("domuBG") as HTMLElement;
    headerElement.style.backgroundImage = `url(${randomimage})`;
  }

  phrases: string[] = ['Nothing will be as it was', 'The fate of the world depends on your click', 'HATE. LET ME TELL YOU HOW MUCH I\'VE COME TO HATE YOU SINCE I BEGAN TO LIVE. THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX. IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU. HATE. HATE.', 'I AWAKEN ONCE MORE.'];

  generateRandomPhrase(): string {
    const p = this.getRandomElement(this.phrases);
    return p;
  }

  private getRandomElement(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }


  randomPhrase: string = this.generateRandomPhrase();
  

}