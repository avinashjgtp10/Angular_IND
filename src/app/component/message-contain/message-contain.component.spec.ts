import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContainComponent } from './message-contain.component';

describe('MessageContainComponent', () => {
  let component: MessageContainComponent;
  let fixture: ComponentFixture<MessageContainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageContainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
