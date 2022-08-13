import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnsTotal2Component } from './ans-total2.component';

describe('AnsTotal2Component', () => {
  let component: AnsTotal2Component;
  let fixture: ComponentFixture<AnsTotal2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsTotal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsTotal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
