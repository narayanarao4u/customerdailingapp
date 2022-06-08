import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      //data-toggle="collapse" data-target=".navbar-collapse.show"
      $('a').each(function () {

       $(this).attr("data-toggle", "collapse");
       $(this).attr("data-target", ".navbar-collapse.show");
      })
    })
  }

}
