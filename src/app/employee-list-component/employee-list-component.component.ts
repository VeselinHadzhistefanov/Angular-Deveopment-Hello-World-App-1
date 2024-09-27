import {Component} from '@angular/core';
import {EmployeeListServiceService} from "../services/employee-list-service.service";

@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.css']
})
export class EmployeeListComponentComponent {


  infoReceived1: string[] = []
  infoReceived2: string[] = []
  infoReceived3: string[] = []

  private readonly employeeListService : EmployeeListServiceService

  constructor(employeeListService: EmployeeListServiceService) {
    this.employeeListService = employeeListService
  }

  getInfoFromServiceClass(userId : number){
    return this.employeeListService.getUserInfoById(userId)
  }

  getInfoFromServiceClass1() {
    return this.infoReceived1
  }

  getInfoFromServiceClass2() {
    return this.infoReceived2
  }

  getInfoFromServiceClass3() {
    return this.infoReceived3
  }
}
