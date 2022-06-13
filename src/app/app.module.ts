
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppNavComponent } from './app-nav/app-nav.component';
import { ToastrService } from './common/toastr.service';
import { 
  AnsTotalComponent,
  UserComponent,  
  AnsListComponent,
  FaultDailingComponent ,
  IvrscompalintsComponent,
  UserSummaryComponent,
  DailingOptionComponent,
  MsgboxComponent,
  AnsTotal2Component,
  AnsTotal2SubComponent,
  ActionRowComponent
} from './fault-dailing/index';

import { SortDirective } from './directive/sort.directive';
import { HideSDTCodePipe } from './pipes/hideSTDCode.pipe';
import { Error404Component } from './share/errors/error404/error404.component';
import { DateTimePipe } from './pipes/dateTime.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReadMorePipe } from './pipes/readMore.pipe';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ActionTakenComponent } from './fault-dailing/action-taken/action-taken.component';
import { UserEditComponent } from './fault-dailing/user/userEdit.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    FaultDailingComponent,
    UserComponent,
    AnsTotalComponent,
    AnsTotal2Component,
    AnsTotal2SubComponent,
    SortDirective,
    UserSummaryComponent,
    UserEditComponent,
    AnsListComponent,   
    Error404Component,
    IvrscompalintsComponent,
    DailingOptionComponent,
    HideSDTCodePipe,
    DateTimePipe,
    ReadMorePipe,
    MsgboxComponent,
    ActionTakenComponent,
    ActionRowComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,   
    HttpClientModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
