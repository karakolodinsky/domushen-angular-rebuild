import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtcComponent } from './etc.component';

describe('EtcComponent', () => {
  let component: EtcComponent;
  let fixture: ComponentFixture<EtcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtcComponent]
    });
    fixture = TestBed.createComponent(EtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
