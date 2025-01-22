import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vacancy} from '../../models/vacancy.model';
import {Observable} from 'rxjs';
import {Company} from '../../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://localhost:3000/companies';

  constructor(
    private http: HttpClient
  ) {
  }

  addVacancy(companyId: string, vacancy: Partial<Vacancy>): Observable<Company> {
    return this.http.post<Company>(
      `${this.apiUrl}/${companyId}/vacancies`,
      vacancy
    );
  }

  updateVacancy(
    companyId: string,
    vacancyId: string,
    vacancy: Partial<Vacancy>
  ): Observable<Company> {
    return this.http.put<Company>(
      `${this.apiUrl}/${companyId}/vacancies/${vacancyId}`,
      vacancy
    );
  }

  deleteVacancy(companyId: string, vacancyId: string): Observable<Company> {
    return this.http.delete<Company>(
      `${this.apiUrl}/${companyId}/vacancies/${vacancyId}`
    );
  }
}
