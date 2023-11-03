import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { WorkFormService } from '../../services/work-form.service';
import { WorkExperienceInterface } from '../../interfaces/workForm.interfaces';

@Component({
  selector: 'form-work',
  templateUrl: './form-work.component.html',
  styleUrls: ['./form-work.component.css'],
})
export class FormWorkComponent implements OnInit {
  workForm: FormGroup;
  dangerMessage: boolean = false;
  validMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private workFormService: WorkFormService
  ) {
    this.workForm = this.fb.group({
      averageSalary: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      relevantSkills: ['', [Validators.required]],
      educationalLevel: ['', [Validators.required]],
      workExperiences: this.fb.array([]),
    });
  }

  workExperiencesControls() {
    return (this.workForm.get('workExperiences') as FormArray)
      .controls as FormGroup[];
  }

  addExperience() {
    const experienceFormGroup = this.fb.group({
      employment: ['', [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });
    (this.workForm.get('workExperiences') as FormArray).push(
      experienceFormGroup
    );
  }

  removeExperience(index: number) {
    (this.workForm.get('workExperiences') as FormArray).removeAt(index);
  }

  onSubmit() {
    if (this.workForm.valid) {
      // Envía los datos del formulario al servidor o realiza la acción necesaria
      this.dangerMessage = false;
      this.validMessage = true;
    } else {
      this.dangerMessage = true;
    }
  }

  ngOnInit(): void {
    console.log('Hello World');
  }
}
