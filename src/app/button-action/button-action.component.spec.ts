import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonActionComponent } from './button-action.component';

describe('ButtonActionComponent', () => {
  let component: ButtonActionComponent;
  let fixture: ComponentFixture<ButtonActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonActionComponent]
    });
    fixture = TestBed.createComponent(ButtonActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
