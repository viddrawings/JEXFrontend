import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CompanyListComponent} from '../company/company-list/company-list.component';
import {CreateVacancyComponent} from '../vacancy/create-vacancy/create-vacancy.component';

@Component({
  selector: 'app-web-user-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CompanyListComponent,
    CreateVacancyComponent
  ],
  templateUrl: './web-user-view.component.html',
  styleUrl: './web-user-view.component.scss'
})
export class WebUserViewComponent {
}
