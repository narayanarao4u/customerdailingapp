import { Component, Output, EventEmitter, OnInit } from "@angular/core";


@Component({
  selector: 'date-option',
  templateUrl: './date-option.component.html',
  styleUrls: ['date-option.component.css'],
})
export class DateOptionComponent implements OnInit {
  dt1: string;
  dt2: string;

  @Output() btnclick = new EventEmitter();

  handleclick(x) {
    let dts = { dt1: this.dt1, dt2: this.dt2 };
    this.btnclick.emit(dts);
  }

  testfire() {
    console.log(this.dt1);
    console.log(this.dt2);
  }

  ngOnInit(): void {
    var date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m + 1, 0);
    
    
    this.dt1 = firstDay.toLocaleDateString('en-CA');
    this.dt2 = lastDay.toLocaleDateString('en-CA');
  }
}