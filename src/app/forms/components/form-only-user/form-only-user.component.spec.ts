import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOnlyUserComponent } from './form-only-user.component';

describe('FormOnlyUserComponent', () => {
  let component: FormOnlyUserComponent;
  let fixture: ComponentFixture<FormOnlyUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormOnlyUserComponent]
    });
    fixture = TestBed.createComponent(FormOnlyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
