import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithWrapperComponent } from 'src/app/pages/re-use-host/with-wrapper/with-wrapper.component';

describe('WithWrapperComponent', () => {
  let component: WithWrapperComponent;
  let fixture: ComponentFixture<WithWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
