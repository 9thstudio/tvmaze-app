import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Content Component ', () => {
    // expect(HeaderComponent).toBeTruthy();
    const component: ContentComponent = new ContentComponent();
    // expect(component).toBeDefined();
    expect(component ).toBeTruthy();
  });
});
