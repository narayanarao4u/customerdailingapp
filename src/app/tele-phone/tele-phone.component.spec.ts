import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TelePhoneComponent } from './tele-phone.component';

describe('TelePhoneComponent', () => {
  let component: TelePhoneComponent;
  let fixture: ComponentFixture<TelePhoneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TelePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
