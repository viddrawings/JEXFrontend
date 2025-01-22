import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Company} from '../../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companiesSubject = new BehaviorSubject<Company[]>([]);
  companies$ = this.companiesSubject.asObservable();

  private apiUrl = 'http://localhost:3000/companies';

  constructor(
    private http: HttpClient
  ) {
  }

  fetchCompanies(): void {
    this.http.get<Company[]>(this.apiUrl).subscribe((companies) => {
      this.companiesSubject.next(companies);
    });
  }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompanyById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${id}`);
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
