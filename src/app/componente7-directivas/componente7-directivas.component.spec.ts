import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente7DirectivasComponent } from './componente7-directivas.component';

describe('Componente7DirectivasComponent', () => {
  let component: Componente7DirectivasComponent;
  let fixture: ComponentFixture<Componente7DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente7DirectivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente7DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
