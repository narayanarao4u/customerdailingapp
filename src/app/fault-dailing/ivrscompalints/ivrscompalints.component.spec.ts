import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrscompalintsComponent } from './ivrscompalints.component';

describe('IvrscompalintsComponent', () => {
  let component: IvrscompalintsComponent;
  let fixture: ComponentFixture<IvrscompalintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrscompalintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrscompalintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
