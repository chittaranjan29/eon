import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserinfoComponent } from './adduserinfo.component';

describe('AdduserinfoComponent', () => {
  let component: AdduserinfoComponent;
  let fixture: ComponentFixture<AdduserinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdduserinfoComponent]
    });
    fixture = TestBed.createComponent(AdduserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
