import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosCursosComponent } from './proximos-cursos.component';

describe('ProximosCursosComponent', () => {
  let component: ProximosCursosComponent;
  let fixture: ComponentFixture<ProximosCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximosCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
