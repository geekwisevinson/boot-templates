import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumbotron1Component } from './jumbotron1.component';

describe('Jumbotron1Component', () => {
  let component: Jumbotron1Component;
  let fixture: ComponentFixture<Jumbotron1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumbotron1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumbotron1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
