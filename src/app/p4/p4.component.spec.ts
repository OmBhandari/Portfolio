import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4Component } from './p4.component';

describe('P4Component', () => {
  let component: P4Component;
  let fixture: ComponentFixture<P4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P4Component]
    });
    fixture = TestBed.createComponent(P4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
