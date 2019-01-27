import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeGherkinComponent } from './make-gherkin.component';

describe('MakeGherkinComponent', () => {
  let component: MakeGherkinComponent;
  let fixture: ComponentFixture<MakeGherkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeGherkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeGherkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
