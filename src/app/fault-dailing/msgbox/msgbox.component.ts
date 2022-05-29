import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-msgbox',
  templateUrl: './msgbox.component.html',
  styleUrls: ['./msgbox.component.css']
})
export class MsgboxComponent implements OnInit {
  @Input() message:any;
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
