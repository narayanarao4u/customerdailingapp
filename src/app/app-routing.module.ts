import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustDailingComponent } from './cust-dailing/cust-dailing.component';
import { ShowDataComponent } from './cust-dailing/show-data/show-data.component';

import { UserComponent, FaultDailingComponent, ActionTakenComponent,
  AnsTotalComponent,   AnsTotal2Component,
   AnsListComponent, IvrscompalintsComponent } from './fault-dailing/index';

import { UserSummaryComponent } from './fault-dailing/reports/user-summary/user-summary.component';
import { Error404Component } from './share/errors/error404/error404.component';



const routes: Routes = [

  {path:'asset', loadChildren:()=>import('./it-assets/it-assets.module').then(m=>m.IpAssetModule) },

  {path:'telephone',loadChildren:()=> import('./tele-phone/tele-phone.module').then(m=>m.TelePhoneModule)},
  {path:'ipdata', loadChildren: ()=> import('./ipData/ipdata.module').then(m=>m.IpDataModule)},
  {path:'custDailing',loadChildren:()=> import('./cust-dailing/cust-dailing.module').then(m=>m.CustDailingModule)},
  // {path:'custDailing',component:CustDailingComponent},
  // {path:'custdailList',component:ShowDataComponent},
  // {path:'custdailList/:phone',component:ShowDataComponent},
  {path:'ansList/:field/:Code/:type',component:AnsListComponent},
  {path:'user',component:UserComponent},
  {path:'faultDailing',component:FaultDailingComponent},
  {path:'ivrscomplaints',component:IvrscompalintsComponent},
  {path:'faultDailing/ansTotal/:field',component:AnsTotalComponent},
  {path:'faultDailing/ansTotal2/:field',component:AnsTotal2Component},
  {path:'faultDailing/UserSummary',component:UserSummaryComponent},
  {path:'faultDailing/actionTaken/:PHONE_NO/:id',component:ActionTakenComponent},

  {path:'404', component:Error404Component},
  {path:'', redirectTo:'faultDailing',pathMatch:'full'}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
