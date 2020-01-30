import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
