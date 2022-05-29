import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PhoneList } from "../phoneList";

@Component({
    selector:'tele-phone-row',
    template:`
    <div class="row" [class.bold]= "dataRow?.Desgn.includes('GM')">

        <div class="col-md-4" [ngSwitch]="dataRow?.Desgn.substring(0, 3)">
            <i class="fa fa-user text-primary" aria-hidden="true" *ngSwitchCase="'JTO'"></i>
            <i class="fa fa-user-circle text-success" aria-hidden="true" *ngSwitchCase="'SDE'"></i>
            <i class="fa fa-user-circle-o text-danger" aria-hidden="true" *ngSwitchDefault></i>
                {{dataRow?.Name}}
        </div>
        
        <div class="col-md-3" >{{dataRow?.Desgn}}</div>
        <div class="col-md-3" >
            <i class="fa fa-tty" aria-hidden="true"></i>
            {{dataRow?.Phone}}
        </div>
        <div class="col-md-2" >
            <i class="fa fa-phone-square" aria-hidden="true" (click)='clickEvent()'></i>
            <a href="tel:+{{dataRow?.Mobile}}"> 
                {{dataRow?.Mobile}}
            </a>
         
        </div>
    </div>
    `,
    styles:[`
        .row {
            padding:10px;            
        }

        .bold {
            font-weight: bolder;
        }
    `]
})

export class TelePhoneRowComponent {
    @Input() dataRow:PhoneList
    @Output() eventClick = new EventEmitter()

    clickEvent(){
        this.eventClick.emit(this.dataRow.Name)
    }


}