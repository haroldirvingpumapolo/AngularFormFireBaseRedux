export interface AdultChildFormInterface {
  id?: string;
  firstName: string;
  lastName: string;
  diseases: string;
  birthDate: Date;
  occupation: string;
  email: string;
  futurePlans: string;
  salary: number;
  canSupportOwnExpenses: boolean;
  hasPartner: boolean;
  hasChildren: boolean;
  drinksAlcohol: boolean;
  doesSmoke: boolean;
  gender: 'MALE' | 'FEMALE' | 'NO-GENDER';
}
