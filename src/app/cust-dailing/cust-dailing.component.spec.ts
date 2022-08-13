import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustDailingComponent } from './cust-dailing.component';

describe('CustDailingComponent', () => {
  let component: CustDailingComponent;
  let fixture: ComponentFixture<CustDailingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustDailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustDailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
