import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feature',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.scss']
})
export class HomeFeatureComponent implements OnInit {

  features;
  constructor() { }

  ngOnInit() {

    this.features = [
      {
        title: 'LAUGHT',
        description: 'As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.',
        image : 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjw7P3GyKvnAhWInxQKHUnVDuUQjRx6BAgBEAQ&url=https%3A%2F%2Fimagefinder.co%2Fphoto%2Fclown-circus-carnival-fun-laugh-face-66bb8&psig=AOvVaw3DisaXPRDS_NMQTp7EVep1&ust=1580482038806130',
      },
      {
        title: 'DREAM',
        description: '',
        image: '',
      }

    ];
  }

}
