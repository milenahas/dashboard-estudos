import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEmAndamentoComponent } from './cursos-em-andamento.component';

describe('CursosEmAndamentoComponent', () => {
  let component: CursosEmAndamentoComponent;
  let fixture: ComponentFixture<CursosEmAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosEmAndamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
