import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-features-card',
  templateUrl: './home-features-card.component.html',
  styleUrls: ['./home-features-card.component.scss']
})
export class HomeFeaturesCardComponent implements OnInit {

  @Input() description: string;
  @Input() image: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
