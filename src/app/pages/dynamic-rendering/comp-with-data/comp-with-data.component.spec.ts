import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompWithDataComponent } from './comp-with-data.component';

describe('CompWithDataComponent', () => {
  let component: CompWithDataComponent;
  let fixture: ComponentFixture<CompWithDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompWithDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompWithDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
