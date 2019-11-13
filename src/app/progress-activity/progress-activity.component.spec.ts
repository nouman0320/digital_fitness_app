import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressActivityComponent } from './progress-activity.component';

describe('ProgressActivityComponent', () => {
  let component: ProgressActivityComponent;
  let fixture: ComponentFixture<ProgressActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
