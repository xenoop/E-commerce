import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsByCategorieComponent} from './products-by-categorie.component';

describe('ProductsByCategorieComponent', () => {
  let component: ProductsByCategorieComponent;
  let fixture: ComponentFixture<ProductsByCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsByCategorieComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
