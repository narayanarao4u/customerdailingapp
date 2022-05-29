import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'hideSDTCode'
})
export class HideSDTCodePipe implements PipeTransform {
    transform(myval:string):string {
        let i = myval.indexOf("-"); 
        if(i>=0){
            myval = myval.slice(i+1, myval.length)
            return myval;
        } else {
            return myval;
        }

    }
}