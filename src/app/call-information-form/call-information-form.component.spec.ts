import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallInformationFormComponent } from './call-information-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OperatorRatesService } from './../service/operator-rates.service';

describe('CallInformationFormComponent', () => {
  let component: CallInformationFormComponent;
  let fixture: ComponentFixture<CallInformationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [CallInformationFormComponent],
      providers: [OperatorRatesService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // component.phoneNumber = '46732111111';
    // fixture.detectChanges();
    // component.findBestOperator();
    // expect(component.cheapestOperatorCost).toEqual(1.1);
  });
});
