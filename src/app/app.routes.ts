import {Routes} from '@angular/router';
import {
  BackofficeEmployeeViewComponent
} from './components/backoffice-employee-view/backoffice-employee-view.component';
import {WebUserViewComponent} from './components/web-user-view/web-user-view.component';

export const routes: Routes = [
  {path: '', redirectTo: 'backoffice-employee', pathMatch: 'full'}, // Default route
  {path: 'backoffice-employee', component: BackofficeEmployeeViewComponent},
  {path: 'web-user', component: WebUserViewComponent}
];
