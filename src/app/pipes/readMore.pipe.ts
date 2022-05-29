import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'readMore'
})
export class ReadMorePipe implements PipeTransform {
    transform(text: string, len:number = 20, showAll:boolean = false):string {
      //  console.log(len,showAll, text.split(" ").length );
        
        if(showAll){
            return text;
        } 
        if(text.length > len){
            return text.slice(0, len) + "...";
        }
        return text;

       
    }
}