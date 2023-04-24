import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente8PasodeparametroComponent } from './componente8-pasodeparametro.component';

describe('Componente8PasodeparametroComponent', () => {
  let component: Componente8PasodeparametroComponent;
  let fixture: ComponentFixture<Componente8PasodeparametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente8PasodeparametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente8PasodeparametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
