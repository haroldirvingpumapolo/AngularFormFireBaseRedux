import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMinorChildComponent } from './form-minor-child.component';

describe('FormMinorChildComponent', () => {
  let component: FormMinorChildComponent;
  let fixture: ComponentFixture<FormMinorChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMinorChildComponent]
    });
    fixture = TestBed.createComponent(FormMinorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
