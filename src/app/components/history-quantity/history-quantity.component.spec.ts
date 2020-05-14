import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryQuantityComponent } from './history-quantity.component';

describe('HistoryQuantityComponent', () => {
  let component: HistoryQuantityComponent;
  let fixture: ComponentFixture<HistoryQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
