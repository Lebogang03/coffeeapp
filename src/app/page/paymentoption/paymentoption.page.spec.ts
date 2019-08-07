import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentoptionPage } from './paymentoption.page';

describe('PaymentoptionPage', () => {
  let component: PaymentoptionPage;
  let fixture: ComponentFixture<PaymentoptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentoptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentoptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
