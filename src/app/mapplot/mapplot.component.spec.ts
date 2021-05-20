import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapplotComponent } from './mapplot.component';

describe('MapplotComponent', () => {
  let component: MapplotComponent;
  let fixture: ComponentFixture<MapplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapplotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
