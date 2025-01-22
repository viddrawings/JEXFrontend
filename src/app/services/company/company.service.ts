import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Company} from '../../models/company.model';
import {Vacancy} from '../../models/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/companies';

  constructor(
    private http: HttpClient
  ) {
  }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompanyById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${id}`);
  }

  getCompaniesWithActiveVacancies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl).pipe(
      map((companies: Company[]) =>
        companies
          .map((company: Company) => ({
            ...company,
            vacancies: company.vacancies?.filter((vacancy: Vacancy) => vacancy.active) || [],
          }))
          .filter((company) => company.vacancies.length > 0) // Only keep companies with at least one active vacancy
      )
    );
  }

  createCompany(company: Partial<Company>): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company);
  }

  updateCompany(company: Partial<Company>): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/${company.id}`, company);
  }

  deleteCompany(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
