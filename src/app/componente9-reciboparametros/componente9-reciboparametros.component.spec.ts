import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente9ReciboparametrosComponent } from './componente9-reciboparametros.component';

describe('Componente9ReciboparametrosComponent', () => {
  let component: Componente9ReciboparametrosComponent;
  let fixture: ComponentFixture<Componente9ReciboparametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente9ReciboparametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente9ReciboparametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
