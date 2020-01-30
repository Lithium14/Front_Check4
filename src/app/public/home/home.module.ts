import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeaturesCardComponent } from './home-features-card/home-features-card.component';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeFeatureComponent,
    HomeFeaturesCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
