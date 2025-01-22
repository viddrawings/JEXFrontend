import {Component} from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {WebUserViewComponent} from './components/web-user-view/web-user-view.component';
import {
  BackofficeEmployeeViewComponent
} from './components/backoffice-employee-view/backoffice-employee-view.component';

@Component({
  selector: 'app-root',
  imports: [MatTabGroup, MatTab, WebUserViewComponent, BackofficeEmployeeViewComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Job Portal';
}
