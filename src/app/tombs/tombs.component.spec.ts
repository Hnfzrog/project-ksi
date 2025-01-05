import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TombsComponent } from './tombs.component';

describe('TombsComponent', () => {
  let component: TombsComponent;
  let fixture: ComponentFixture<TombsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TombsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TombsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
