
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MinorChildFormService } from '../../services/minor-child-form.service';

@Component({
  selector: 'form-minor-child',
  templateUrl: './form-minor-child.component.html',
  styleUrls: ['./form-minor-child.component.css']
})
export class FormMinorChildComponent implements OnInit {
  public minorChildForm: FormGroup; // Cambia el nombre del formulario y las propiedades asociadas
  public dangerMessage: boolean = false;
  public validMessage: boolean = false;

  constructor(private minorChildFormService: MinorChildFormService) {
    this.minorChildForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      parentGuardianName: new FormControl('', [Validators.required]), // Nuevo campo para el nombre del padre/tutor
      birthDate: new FormControl(null, [Validators.required]),
      // Modifica o agrega más campos según las necesidades para un hijo menor de edad
    });
  }

  async onSubmit() {
    if (this.minorChildForm.valid) {
      this.minorChildFormService.addMinorChildForm(this.minorChildForm.value);

      this.minorChildForm.reset();
      Object.keys(this.minorChildForm.controls).forEach((controlName) => {
        this.minorChildForm.get(controlName)?.setErrors(null);
      });
      this.dangerMessage = false;
      this.validMessage = true;
    } else {
      this.dangerMessage = true;
    }
  }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria para el formulario de un hijo menor de edad
  }
}
