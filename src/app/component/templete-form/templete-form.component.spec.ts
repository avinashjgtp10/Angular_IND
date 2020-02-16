import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteFormComponent } from './templete-form.component';

describe('TempleteFormComponent', () => {
  let component: TempleteFormComponent;
  let fixture: ComponentFixture<TempleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
