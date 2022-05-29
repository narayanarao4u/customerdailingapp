import { Component, Input } from "@angular/core";

@Component({
    selector:'action-row',
    templateUrl:'./action-row.component.html'
})

export class ActionRowComponent {
    @Input() dataRow:any



}