import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCompteComponent } from './gestion-compte.component';

describe('GestionCompteComponent', () => {
  let component: GestionCompteComponent;
  let fixture: ComponentFixture<GestionCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
