import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoWrapperComponent } from 'src/app/pages/re-use-host/no-wrapper/no-wrapper.component';

describe('NoWrapperComponent', () => {
  let component: NoWrapperComponent;
  let fixture: ComponentFixture<NoWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
