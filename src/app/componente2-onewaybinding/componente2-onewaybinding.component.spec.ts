import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2OnewaybindingComponent } from './componente2-onewaybinding.component';

describe('Componente2OnewaybindingComponent', () => {
  let component: Componente2OnewaybindingComponent;
  let fixture: ComponentFixture<Componente2OnewaybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2OnewaybindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2OnewaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
