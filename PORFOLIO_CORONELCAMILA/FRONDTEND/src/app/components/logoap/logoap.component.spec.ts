import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGOAPComponent } from './logoap.component';

describe('LOGOAPComponent', () => {
  let component: LOGOAPComponent;
  let fixture: ComponentFixture<LOGOAPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LOGOAPComponent]
    });
    fixture = TestBed.createComponent(LOGOAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
