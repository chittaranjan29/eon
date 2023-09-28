import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularEmpComponent } from './regular-emp.component';

describe('RegularEmpComponent', () => {
  let component: RegularEmpComponent;
  let fixture: ComponentFixture<RegularEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularEmpComponent]
    });
    fixture = TestBed.createComponent(RegularEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
