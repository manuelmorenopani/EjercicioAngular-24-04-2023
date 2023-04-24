import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente4TwowaybindingComponent } from './componente4-twowaybinding.component';

describe('Componente4TwowaybindingComponent', () => {
  let component: Componente4TwowaybindingComponent;
  let fixture: ComponentFixture<Componente4TwowaybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente4TwowaybindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente4TwowaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
