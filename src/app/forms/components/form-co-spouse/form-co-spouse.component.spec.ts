import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoSpouseComponent } from './form-co-spouse.component';

describe('FormCoSpouseComponent', () => {
  let component: FormCoSpouseComponent;
  let fixture: ComponentFixture<FormCoSpouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCoSpouseComponent]
    });
    fixture = TestBed.createComponent(FormCoSpouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
