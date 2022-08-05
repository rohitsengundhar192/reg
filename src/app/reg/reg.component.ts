import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  }

login=new FormGroup({
  fn:new FormControl(null,[Validators.required]),
  sn:new FormControl(null,[Validators.required]),
  add:new FormControl(null,[Validators.required]),
  addd:new FormControl(null,[Validators.required]),
  city:new FormControl(null,[Validators.required]),
  state:new FormControl(null,[Validators.required]),
  zip:new FormControl(null,[Validators.required]),
  phone:new FormControl(null,[Validators.required]),
  em:new FormControl(null,[Validators.required]),
  or:new FormControl(null,[Validators.required]),
})
get fn()
{
  return this.login.get('fn');
}
get sn()
{
  return this.login.get('sn');
}
get add()
{
  return this.login.get('add');
}
get addd()
{
  return this.login.get('addd');
}
get city()
{
  return this.login.get('city');
}
get state()
{
  return this.login.get('state');
}
get zip()
{
  return this.login.get('zip');
}
get phone()
{
  return this.login.get('phone');
}
get em()
{
  return this.login.get('em');
}


}
