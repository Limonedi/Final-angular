import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegusComponent } from './regus.component';

describe('RegusComponent', () => {
  let component: RegusComponent;
  let fixture: ComponentFixture<RegusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
