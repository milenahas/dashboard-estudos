import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroCardComponent } from './pomodoro-card.component';

describe('PomodoroCardComponent', () => {
  let component: PomodoroCardComponent;
  let fixture: ComponentFixture<PomodoroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomodoroCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
