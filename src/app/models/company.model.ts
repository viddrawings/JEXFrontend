import {Vacancy} from './vacancy.model';

export interface Company {
  id: number;
  name: string;
  address: string;
  vacancies: Vacancy[];
}
