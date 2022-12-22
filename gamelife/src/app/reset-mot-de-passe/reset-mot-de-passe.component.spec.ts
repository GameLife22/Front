import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetMotDePasseComponent } from './reset-mot-de-passe.component';

describe('ResetMotDePasseComponent', () => {
  let component: ResetMotDePasseComponent;
  let fixture: ComponentFixture<ResetMotDePasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetMotDePasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
