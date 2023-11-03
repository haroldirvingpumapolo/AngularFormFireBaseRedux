import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormOnlyUserComponent } from './components/form-only-user/form-only-user.component';
import { FormWorkComponent } from './components/form-work/form-work.component';
import { FormFamilyComponent } from './components/form-family/form-family.component';
import { FormCoSpouseComponent } from './components/form-co-spouse/form-co-spouse.component';
import { FormMinorChildComponent } from './components/form-minor-child/form-minor-child.component';
import { FormAdultChildComponent } from './components/form-adult-child/form-adult-child.component';
import { FormsComponent } from './pages/app-forms.component';

@NgModule({
  declarations: [
    FormOnlyUserComponent,
    FormWorkComponent,
    FormFamilyComponent,
    FormCoSpouseComponent,
    FormMinorChildComponent,
    FormAdultChildComponent,
    FormsComponent,
  ],
  exports: [FormsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
})
export class AppFormsModule {}
