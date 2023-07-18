import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenprintingComponent } from './screenprinting.component';

describe('ScreenprintingComponent', () => {
  let component: ScreenprintingComponent;
  let fixture: ComponentFixture<ScreenprintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenprintingComponent]
    });
    fixture = TestBed.createComponent(ScreenprintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
