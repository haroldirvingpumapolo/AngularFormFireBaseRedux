import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { MinorChildFormInterface } from '../interfaces/minorChildForm.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MinorChildFormService {
  constructor(private firestore: Firestore) {}

  addMinorChildForm(minorChildForm: MinorChildFormInterface) {
    const minorChildFormRef = collection(this.firestore, 'minorChildForm');
    return addDoc(minorChildFormRef, minorChildForm);
  }

  getMinorChildForm(): Observable<MinorChildFormInterface[]> {
    const minorChildFormRef = collection(this.firestore, 'minorChildForm');
    return collectionData(minorChildFormRef, { idField: 'id' }) as Observable<
      MinorChildFormInterface[]
    >;
  }

  deleteMinorChildForm(minorChildForm: MinorChildFormInterface) {
    const minorChildFormRef = doc(
      this.firestore,
      `minorChildForm/${minorChildForm.id}`
    );
    return deleteDoc(minorChildFormRef);
  }
}
