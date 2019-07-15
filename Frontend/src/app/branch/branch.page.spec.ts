import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchPage } from './branch.page';

describe('BranchPage', () => {
  let component: BranchPage;
  let fixture: ComponentFixture<BranchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
