import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListServiceService {
  infoUser1: string[] = ["My Baby Love 1", "123", "a@gmail.com"]
  infoUser2: string[] = ["My Baby Love 2", "12345", "MyLove@gmail.com"]
  infoUser3: string[] = ["MyLove Sofi", "333", "MyLoveIsSoMuch@gmail.com"]

  // Create data array
  userInfo : string[][] = [this.infoUser1, this.infoUser2, this.infoUser3]

  getUserInfoById(userId : number){
    return this.userInfo[userId]
  }

  getInfo1(): string[] {
    return this.infoUser1
  }

  getInfo2(): string[] {
    return this.infoUser2;
  }

  getInfo3(): string[] {
    return this.infoUser3;
  }

  constructor() { }
}
