import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopraComponent } from './sopra.component';

describe('SopraComponent', () => {
  let component: SopraComponent;
  let fixture: ComponentFixture<SopraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
