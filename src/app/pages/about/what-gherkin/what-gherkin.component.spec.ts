import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatGherkinComponent } from './what-gherkin.component';

describe('WhatGherkinComponent', () => {
  let component: WhatGherkinComponent;
  let fixture: ComponentFixture<WhatGherkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatGherkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatGherkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
