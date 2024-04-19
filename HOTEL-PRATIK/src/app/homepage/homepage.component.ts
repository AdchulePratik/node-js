import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DATASERVICEService } from '../dataservice.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HOMEPAGEComponent {

  constructor
  (private router:Router, private dataservice:DATASERVICEService){

  }

  journey(Data:any){
    this.dataservice.endpoint=Data;

    if (Data === 'admin') {
      this.router.navigateByUrl('/admin')

   } else if (Data === 'owner') {
      this.router.navigateByUrl('/owner')

    } else {
      this.router.navigateByUrl('/user')

    }

}




}


