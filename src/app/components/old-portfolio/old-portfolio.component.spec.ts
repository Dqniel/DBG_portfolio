import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPortfolioComponent } from './old-portfolio.component';

describe('OldPortfolioComponent', () => {
  let component: OldPortfolioComponent;
  let fixture: ComponentFixture<OldPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
