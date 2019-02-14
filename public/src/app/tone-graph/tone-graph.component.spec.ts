import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneGraphComponent } from './tone-graph.component';

describe('ToneGraphComponent', () => {
  let component: ToneGraphComponent;
  let fixture: ComponentFixture<ToneGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
