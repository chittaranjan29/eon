import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleComponentComponent } from './inline-style-component.component';

describe('InlineStyleComponentComponent', () => {
  let component: InlineStyleComponentComponent;
  let fixture: ComponentFixture<InlineStyleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineStyleComponentComponent]
    });
    fixture = TestBed.createComponent(InlineStyleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
