import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorxpersonaComponent } from './operadorxpersona.component';

describe('OperadorxpersonaComponent', () => {
  let component: OperadorxpersonaComponent;
  let fixture: ComponentFixture<OperadorxpersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadorxpersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadorxpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
