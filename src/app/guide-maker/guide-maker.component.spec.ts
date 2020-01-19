import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideMakerComponent } from './guide-maker.component';

describe('GuideMakerComponent', () => {
  let component: GuideMakerComponent;
  let fixture: ComponentFixture<GuideMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
