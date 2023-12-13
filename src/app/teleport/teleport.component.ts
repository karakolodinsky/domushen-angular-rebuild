import { Component } from '@angular/core';

@Component({
  selector: 'app-teleport',
  templateUrl: './teleport.component.html',
  styleUrls: ['./teleport.component.css']
})
export class TeleportComponent {
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  Link(): string {
    // Define an array of website links
    const links = [
      'https://gifcities.org/',
      'https://vimm.net/',
      'https://leusyth.neocities.org/',
      'https://http.cat/',
      'https://yukkuritalk.com/',
      'https://www.diariodenavarra.es/pags/carteles-san-fermin.html',
      'https://tcrf.net/The_Cutting_Room_Floor',
      'http://www.rechtdesign.com/index.html',
      'http://www.alfasystem.net/game/linda/scenario.htm',
      'https://web.archive.org/web/20060906023645/http://www.atlus.com/smt/main.html',
      'https://web.archive.org/web/20040924131326mp_/http://www.digitaldevilsaga.com/',
      'https://web.archive.org/web/19961029121016/http://atlus.com/',
      'https://www.fightersgeneration.com/news1/fallen-angels.htm',
      'https://deathgenerator.com/#gallery',
      'https://addpmp.slamjam.com/',
      'https://radiooooo.com/',
      'https://aggie.io/',
      'https://domushen.neocities.org/',
      'https://kuudzu.neocities.org/',
      'https://errorsorry355558949.wordpress.com/'
    ];

    // Select a random link from the array
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
  }


  redirectToRandomLink(): void {
    const randomLink = this.Link();
    window.open(randomLink, '_blank');
  }
  
}
