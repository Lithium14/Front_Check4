import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public homePath = 'home';
  public loginPath = 'login';
  public registerPath = 'register';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public isActive(page: string): boolean {
    return this.router.isActive(page, true);
   }

  public navigate(page: string): void {
    this.router.navigate([page]);
   }

}
