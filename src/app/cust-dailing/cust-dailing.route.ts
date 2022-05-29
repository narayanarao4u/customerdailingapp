import { CustDailingComponent } from "./cust-dailing.component";
import { ShowDataComponent } from "./show-data/show-data.component";

export const custDailingRoutes = [
    {path:'',component:CustDailingComponent},
    {path:'dailList',component:ShowDataComponent},
    {path:'dailList/:phone',component:ShowDataComponent}  
]