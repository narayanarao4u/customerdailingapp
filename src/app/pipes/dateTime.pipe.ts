import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'dateTime'
})
export class DateTimePipe extends DatePipe implements PipeTransform {
    transform(value:any,dtFormat='dd-MM-yy HH:mm:ss') : any {
        return super.transform(value, dtFormat)
    }
}