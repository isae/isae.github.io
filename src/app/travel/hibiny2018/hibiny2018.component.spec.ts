import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hibiny2018Component } from './hibiny2018.component';

describe('Hibiny2018Component', () => {
  let component: Hibiny2018Component;
  let fixture: ComponentFixture<Hibiny2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hibiny2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hibiny2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
