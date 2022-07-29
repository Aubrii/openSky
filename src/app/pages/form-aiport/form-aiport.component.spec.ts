import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAiportComponent } from './form-aiport.component';

describe('FormAiportComponent', () => {
  let component: FormAiportComponent;
  let fixture: ComponentFixture<FormAiportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAiportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAiportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
