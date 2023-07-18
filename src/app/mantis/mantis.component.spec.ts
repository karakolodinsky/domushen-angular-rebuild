import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantisComponent } from './mantis.component';

describe('MantisComponent', () => {
  let component: MantisComponent;
  let fixture: ComponentFixture<MantisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantisComponent]
    });
    fixture = TestBed.createComponent(MantisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
