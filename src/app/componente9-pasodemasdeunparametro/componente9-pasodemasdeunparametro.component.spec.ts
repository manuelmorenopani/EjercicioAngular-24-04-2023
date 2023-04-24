import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente9PasodemasdeunparametroComponent } from './componente9-pasodemasdeunparametro.component';

describe('Componente9PasodemasdeunparametroComponent', () => {
  let component: Componente9PasodemasdeunparametroComponent;
  let fixture: ComponentFixture<Componente9PasodemasdeunparametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente9PasodemasdeunparametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente9PasodemasdeunparametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
