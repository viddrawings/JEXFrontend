import {Vacancy} from './vacancy.model';

export interface Company {
  id: string;
  name: string;
  address: string;
  vacancies: Vacancy[];
}
