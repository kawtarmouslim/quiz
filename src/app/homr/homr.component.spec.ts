import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomrComponent } from './homr.component';

describe('HomrComponent', () => {
  let component: HomrComponent;
  let fixture: ComponentFixture<HomrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomrComponent]
    });
    fixture = TestBed.createComponent(HomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
