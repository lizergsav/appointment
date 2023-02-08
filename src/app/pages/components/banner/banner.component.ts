import { Component } from '@angular/core';
import {NgbCarouselConfig, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [NgbCarouselConfig]
})
export class BannerComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  model: NgbDateStruct | undefined;

  constructor(config: NgbCarouselConfig) {
    config.interval = 20000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

}
