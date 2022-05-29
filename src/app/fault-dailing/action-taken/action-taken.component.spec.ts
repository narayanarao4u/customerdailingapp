import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTakenComponent } from './action-taken.component';

describe('ActionTakenComponent', () => {
  let component: ActionTakenComponent;
  let fixture: ComponentFixture<ActionTakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
