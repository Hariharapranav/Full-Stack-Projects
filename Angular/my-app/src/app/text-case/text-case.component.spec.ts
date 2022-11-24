import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCaseComponent } from './text-case.component';

describe('TextCaseComponent', () => {
  let component: TextCaseComponent;
  let fixture: ComponentFixture<TextCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
