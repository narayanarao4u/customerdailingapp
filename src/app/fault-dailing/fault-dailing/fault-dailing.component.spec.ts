import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultDailingComponent } from './fault-dailing.component';

describe('FaultDailingComponent', () => {
  let component: FaultDailingComponent;
  let fixture: ComponentFixture<FaultDailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultDailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultDailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
