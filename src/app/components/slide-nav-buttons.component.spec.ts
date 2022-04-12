import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNavButtonsComponent } from './slide-nav-buttons.component';

describe('SlideNavButtonsComponent', () => {
  let component: SlideNavButtonsComponent;
  let fixture: ComponentFixture<SlideNavButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideNavButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideNavButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
