import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdultChildFormService } from '../../services/adult-child-form.service';

@Component({
  selector: 'form-adult-child',
  templateUrl: './form-adult-child.component.html',
  styleUrls: ['./form-adult-child.component.css'],
})
export class FormAdultChildComponent implements OnInit {
  public adultChildForm: FormGroup;
  public dangerMessage: boolean = false;
  public validMessage: boolean = false;

  constructor(private adultChildFormService: AdultChildFormService) {
    this.adultChildForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      diseases: new FormControl('', [Validators.required]),
      birthDate: new FormControl(null, [Validators.required]),
      occupation: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      futurePlans: new FormControl('', [Validators.required]),
      salary: new FormControl(0),
      canSupportOwnExpenses: new FormControl(false),
      hasPartner: new FormControl(false),
      hasChildren: new FormControl(false),
      drinksAlcohol: new FormControl(false),
      doesSmoke: new FormControl(false),
      gender: new FormControl('NO-GENDER'),
    });
  }

  async onSubmit() {
    if (this.adultChildForm.valid) {
      this.adultChildFormService.addAdultChildForm(this.adultChildForm.value);

      this.adultChildForm.reset();
      Object.keys(this.adultChildForm.controls).forEach((controlName) => {
        this.adultChildForm.get(controlName)?.setErrors(null);
      });
      this.dangerMessage = false;
      this.validMessage = true;
    } else {
      this.dangerMessage = true;
    }
  }

  ngOnInit(): void {
    /*  this.adultChildFormService.getAdultChildForm().subscribe((AdultChild) => {
      console.log(AdultChild);
    }); */
  }
}
