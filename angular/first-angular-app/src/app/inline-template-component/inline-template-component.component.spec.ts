import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplateComponentComponent } from './inline-template-component.component';

describe('InlineTemplateComponentComponent', () => {
  let component: InlineTemplateComponentComponent;
  let fixture: ComponentFixture<InlineTemplateComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineTemplateComponentComponent]
    });
    fixture = TestBed.createComponent(InlineTemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
