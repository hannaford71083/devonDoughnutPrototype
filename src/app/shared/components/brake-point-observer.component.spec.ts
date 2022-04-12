import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakePointObserverComponent } from './brake-point-observer.component';

describe('BrakePointObserverComponent', () => {
  let component: BrakePointObserverComponent;
  let fixture: ComponentFixture<BrakePointObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrakePointObserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrakePointObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
