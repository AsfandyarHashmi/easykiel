import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleguideComponent } from './exampleguide.component';

describe('ExampleguideComponent', () => {
  let component: ExampleguideComponent;
  let fixture: ComponentFixture<ExampleguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
