import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityItemComponent } from './quantity-item.component';

describe('QuantityItemComponent', () => {
  let component: QuantityItemComponent;
  let fixture: ComponentFixture<QuantityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
