import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallInformationFormComponent } from './call-information-form.component';

describe('CallInformationFormComponent', () => {
  let component: CallInformationFormComponent;
  let fixture: ComponentFixture<CallInformationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallInformationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
