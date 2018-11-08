import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechasiaComponent } from './techasia.component';

describe('TechasiaComponent', () => {
  let component: TechasiaComponent;
  let fixture: ComponentFixture<TechasiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechasiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
