import {Component} from '@angular/core';
import {EmployeeListServiceService} from "./services/employee-list-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeListServiceService]
})
export class AppComponent {
  title = 'hello-world';
}
