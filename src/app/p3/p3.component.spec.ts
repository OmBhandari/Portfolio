import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3Component } from './p3.component';

describe('P3Component', () => {
  let component: P3Component;
  let fixture: ComponentFixture<P3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P3Component]
    });
    fixture = TestBed.createComponent(P3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
