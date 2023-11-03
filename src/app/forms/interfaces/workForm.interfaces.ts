export interface WorkFormInterface {
  id?: number;
  occupation: string;
  relevantSkills: string;
  educationalLevel:
    | 'WITHOUT_STUDY'
    | 'SCHOOL'
    | 'INSTITUTE'
    | 'UNIVERSITY'
    | 'STUDIES_FOR_INTEREST';
  workExperiences: WorkExperienceInterface[];
}
export interface WorkExperienceInterface {
  employment: string;
  startDate: Date;
  endDate: Date;
}
