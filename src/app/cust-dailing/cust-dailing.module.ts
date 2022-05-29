import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustDailingComponent } from "./cust-dailing.component";
import { custDailingRoutes } from "./cust-dailing.route";
import { ShowDataComponent } from "./show-data/show-data.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(custDailingRoutes)
    ],
    declarations:[
        CustDailingComponent,
        ShowDataComponent
    ]


})
export class CustDailingModule{}