import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente6RoutingComponent } from './componente6-routing.component';

describe('Componente6RoutingComponent', () => {
  let component: Componente6RoutingComponent;
  let fixture: ComponentFixture<Componente6RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente6RoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente6RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
