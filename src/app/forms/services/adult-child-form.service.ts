import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { AdultChildFormInterface } from '../interfaces/adultChildForm.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdultChildFormService {
  constructor(private firestore: Firestore) {}

  addAdultChildForm(adultChildForm: AdultChildFormInterface) {
    const adultChildFormRef = collection(this.firestore, 'adultChildForm');
    return addDoc(adultChildFormRef, adultChildForm);
  }

  getAdultChildForm(): Observable<AdultChildFormInterface[]> {
    const adultChildFormRef = collection(this.firestore, 'adultChildForm');
    return collectionData(adultChildFormRef, { idField: 'id' }) as Observable<
      AdultChildFormInterface[]
    >;
  }

  deleteAdultChildForm(adultChildForm: AdultChildFormInterface) {
    const adultChildFormRef = doc(
      this.firestore,
      `adultChildForm/${adultChildForm.id}`
    );
    return deleteDoc(adultChildFormRef);
  }
}
