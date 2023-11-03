import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { WorkFormInterface } from '../interfaces/workForm.interfaces';

@Injectable({
  providedIn: 'root',
})
export class WorkFormService {
  constructor(private firestore: Firestore) {}

  addWorkForm(WorkForm: WorkFormInterface) {
    const WorkFormRef = collection(this.firestore, 'WorkForm');
    return addDoc(WorkFormRef, WorkForm);
  }

  getWorkForm(): Observable<WorkFormInterface[]> {
    const WorkFormRef = collection(this.firestore, 'WorkForm');
    return collectionData(WorkFormRef, { idField: 'id' }) as Observable<
      WorkFormInterface[]
    >;
  }

  deleteWorkForm(WorkForm: WorkFormInterface) {
    const WorkFormRef = doc(
      this.firestore,
      `WorkForm/${WorkForm.id}`
    );
    return deleteDoc(WorkFormRef);
  }
}
