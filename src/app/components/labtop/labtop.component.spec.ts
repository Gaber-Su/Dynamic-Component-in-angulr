/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabtopComponent } from './labtop.component';

describe('LabtopComponent', () => {
  let component: LabtopComponent;
  let fixture: ComponentFixture<LabtopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
