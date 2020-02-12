import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleContentParentComponent } from './lifecycle-content-parent.component';

describe('LifecycleContentParentComponent', () => {
  let component: LifecycleContentParentComponent;
  let fixture: ComponentFixture<LifecycleContentParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleContentParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleContentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
