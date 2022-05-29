import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'dailing-option',
    templateUrl:'./data-option.component.html',
    styleUrls:['./data-option.component.css']
})
export class DailingOptionComponent implements OnInit{
    type = "fault";
    @Output() optionClick = new EventEmitter()
    handleChange($event){
        this.optionClick.emit(this.type)
    }
    ngOnInit():void {

    }
}