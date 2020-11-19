import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUseHostComponent } from './re-use-host.component';

describe('ReUseHostComponent', () => {
  let component: ReUseHostComponent;
  let fixture: ComponentFixture<ReUseHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReUseHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReUseHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
