import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { Reg1Component } from './reg1/reg1.component';

const routes: Routes = [
  {path:'app',component:AppComponent},
  {path:'reg',component:RegComponent},
  {path:'reg1',component:Reg1Component},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
