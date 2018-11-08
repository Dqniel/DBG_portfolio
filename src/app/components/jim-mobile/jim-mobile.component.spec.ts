import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JimMobileComponent } from './jim-mobile.component';

describe('JimMobileComponent', () => {
  let component: JimMobileComponent;
  let fixture: ComponentFixture<JimMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JimMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JimMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
