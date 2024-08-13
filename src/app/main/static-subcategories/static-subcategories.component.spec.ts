import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSubcategoriesComponent } from './static-subcategories.component';

describe('StaticSubcategoriesComponent', () => {
  let component: StaticSubcategoriesComponent;
  let fixture: ComponentFixture<StaticSubcategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticSubcategoriesComponent]
    });
    fixture = TestBed.createComponent(StaticSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
