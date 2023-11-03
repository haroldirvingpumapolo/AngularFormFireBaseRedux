import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFamilyComponent } from './form-family.component';

describe('FormFamilyComponent', () => {
  let component: FormFamilyComponent;
  let fixture: ComponentFixture<FormFamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFamilyComponent]
    });
    fixture = TestBed.createComponent(FormFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
