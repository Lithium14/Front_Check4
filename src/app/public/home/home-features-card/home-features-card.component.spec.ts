import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturesCardComponent } from './home-features-card.component';

describe('HomeFeaturesCardComponent', () => {
  let component: HomeFeaturesCardComponent;
  let fixture: ComponentFixture<HomeFeaturesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFeaturesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeaturesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
