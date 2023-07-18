import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchbookComponent } from './sketchbook.component';

describe('SketchbookComponent', () => {
  let component: SketchbookComponent;
  let fixture: ComponentFixture<SketchbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SketchbookComponent]
    });
    fixture = TestBed.createComponent(SketchbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
