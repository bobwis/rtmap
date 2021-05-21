import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapplot2Component } from './mapplot2.component';

describe('MapplotComponent', () => {
  let component: Mapplot2Component;
  let fixture: ComponentFixture<Mapplot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mapplot2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mapplot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
