import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorkComponent } from './form-work.component';

describe('FormWorkComponent', () => {
  let component: FormWorkComponent;
  let fixture: ComponentFixture<FormWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormWorkComponent]
    });
    fixture = TestBed.createComponent(FormWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
