import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SumArrayObjects } from 'src/app/share/myfunction/myfunction';
import { FaultdataService } from '../../faultdata.service';

import * as $ from 'jquery';
// declare var $:any;
// declare var jQuery: any;

@Component({
    selector: 'ans-total',
    templateUrl: './ans-total.component.html',
    styleUrls: ['./ans-total.component.css']


})
export class AnsTotalComponent implements OnInit{
    data: any;
    field: any;
    type = 'fault';
    summary = {
      total: 0,
      answered: 0,
      perComplete: 0

    };

    constructor(private ds: FaultdataService, private route: ActivatedRoute){}

    getData(field){
        this.field = field;
        return this.ds.getansweredTotal(field, this.type).subscribe((res) => {
          //console.log(res)
          this.data = res["data"];
          // adding percentage to data
            this.data.forEach(function(e) {
                    e.per = Math.round((e.ans * 100) / e.count);
                  });

            // sort data by ans
            this.data.sort(function(a, b) {
                  return b.ans - a.ans;
                });

            this.summary.total = SumArrayObjects(this.data, 'count');
            this.summary.answered = SumArrayObjects(this.data, 'ans');
            this.summary.perComplete = Math.round((this.summary.answered * 100) / this.summary.total);

        });
    }

    showBtn(x, field){
        //  console.log(field);

        if (x > 0 || field === 'remarks') {
        return ['btn', 'btn-info', 'btn-block'];
        }
        else {
        return['btn',  'btn-block'];
        }
    }

    handleChange($event){
        this.type = $event;
        this.getData(this.field);
      }


    ngOnInit(): void {

        this.route.params.subscribe(routeParams => {
            this.getData(routeParams.field);
        });

        $(document).ready(function(){
            console.log("Hello from jQuery!");
            // $('.h4').css('background-color', 'yellow');
            // $('[data-name="ans"]').trigger( 'click' );
          });

       /* (function ($) {
            $(document).ready(function(){
              console.log("Hello from jQuery!");
              $('h3').css("background-color", "yellow");
              $('#tb1').DataTable();
            });
          })(jQuery);*/
    }
}
