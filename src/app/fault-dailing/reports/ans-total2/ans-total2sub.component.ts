import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector:'ans',
    template:`
        <tr >
            <div class="col">{{item?.fault}}</div>
            <div class="col">{{item?.ogbar}}</div>
            <div class="col">{{item?.susnp}}</div>
        </tr>
    `
})
export class AnsTotal2SubComponent implements OnInit {
    item:any;
    @Input() data:any;

    pivot1(data){               
      let r = {}  
      data.forEach((e) => {
        r[e.type] = e.ans          
      });
      return r
    }


    ngOnInit(): void {
       this.item =  this.pivot1(this.data)        
    }
}
