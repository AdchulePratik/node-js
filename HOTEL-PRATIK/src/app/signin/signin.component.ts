import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DATASERVICEService } from '../dataservice.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SIGNINComponent {

  loginform! :FormGroup;
  //enpoint :any;
  getapidata :any;
  endpoint = 'admin';

  constructor (private fb :FormBuilder, private dataserviceservice:DATASERVICEService ,private router:Router){

  }

  ngOnInit(){
    this.login();
  }

  login(){
    this.loginform = this.fb.group({
      username :['',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z]*$")]],
      password :['',[Validators.required]]
    })
  }

  async submit(){
    console.log('login',this.loginform.value);
    this.getapidata = await this.dataserviceservice.getapicalldata(this.endpoint).toPromise();
     // let getData = res;
    // console.log("getdata",getData);

    let logindata = this.getapidata.find((ele:any)=>{
      return ele.name == this.loginform.value.username && ele.password ==  this.loginform.value.password
    })

    if (logindata) {
      alert ('login sucessfully');
      this.router.navigateByUrl('/adminsucess')

    }
    else {
      alert('user not found');
      this.router.navigateByUrl('/signin')
    }


  }


}

