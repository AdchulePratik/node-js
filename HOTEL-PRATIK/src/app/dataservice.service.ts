import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DATASERVICEService {

   url = 'http://localhost:3000/'
   endpoint: any;

  constructor(private http :HttpClient) {

  }

  getapicalldata(endpoint:any){
    let updateurl = this.url + endpoint;
    return this.http.get(updateurl);

  }



}
