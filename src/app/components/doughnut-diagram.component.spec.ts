import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutDiagramComponent } from './doughnut-diagram.component';

describe('DoughnutDiagramComponent', () => {
  let component: DoughnutDiagramComponent;
  let fixture: ComponentFixture<DoughnutDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
