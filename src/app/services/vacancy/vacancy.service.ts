import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vacancy} from '../../models/vacancy.model';
import {map, Observable, switchMap} from 'rxjs';
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
    return this.http.get<Company>(`${this.apiUrl}/${companyId}`).pipe(
      map((company: Company) => {
        const newVacancy = {id: this.generateId(), ...vacancy} as Vacancy;
        company.vacancies = [...(company.vacancies || []), newVacancy];
        return company;
      }),
      switchMap((updatedCompany: Company) =>
        this.http.put<Company>(`${this.apiUrl}/${companyId}`, updatedCompany)
      )
    );
  }

  private generateId(): string {
    return Date.now().toString(); // Generate a simple unique ID based on the current timestamp
  }

  updateVacancy(companyId: string, vacancy: Vacancy): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${companyId}`).pipe(
      map((company: Company) => {
        const index = company.vacancies?.findIndex(v => v.id === vacancy.id);
        if (index !== undefined && index > -1) {
          company.vacancies[index] = {...company.vacancies[index], ...vacancy};
        }
        return company;
      }),
      switchMap((updatedCompany: Company) =>
        this.http.put<Company>(`${this.apiUrl}/${companyId}`, updatedCompany)
      )
    );
  }

  deleteVacancy(companyId: string, vacancyId: string): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${companyId}`).pipe(
      map((company: Company) => {
        company.vacancies = company.vacancies?.filter(vacancy => vacancy.id !== vacancyId);
        return company;
      }),
      switchMap((updatedCompany: Company) =>
        this.http.put<Company>(`${this.apiUrl}/${companyId}`, updatedCompany)
      )
    );
  }
}
