import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateFormPageComponent } from './product-create-form-page.component';

describe('ProductCreateFormPageComponent', () => {
  let component: ProductCreateFormPageComponent;
  let fixture: ComponentFixture<ProductCreateFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCreateFormPageComponent]
    });
    fixture = TestBed.createComponent(ProductCreateFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
