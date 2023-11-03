import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdultChildComponent } from './form-adult-child.component';

describe('FormAdultChildComponent', () => {
  let component: FormAdultChildComponent;
  let fixture: ComponentFixture<FormAdultChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAdultChildComponent]
    });
    fixture = TestBed.createComponent(FormAdultChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
