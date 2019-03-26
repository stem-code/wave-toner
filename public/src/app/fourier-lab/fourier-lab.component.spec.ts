import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourierLabComponent } from './fourier-lab.component';

describe('FourierLabComponent', () => {
  let component: FourierLabComponent;
  let fixture: ComponentFixture<FourierLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourierLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourierLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
