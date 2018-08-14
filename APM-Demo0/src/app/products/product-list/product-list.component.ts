import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import * as fromProductState from 'src/app/products/state/product.reducer';
import * as fromProductActions from '../../products/actions/product.actions';
import { takeWhile } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;
  componentActive = false;
  errorMessage$: Observable<string>;

  constructor(private productService: ProductService, private store: Store<fromProductState.state>) { }

  ngOnInit(): void {
    this.sub = this.store.select(fromProductState.getShowProductCode).subscribe(showProductCode => {
        this.displayCode = showProductCode;
    }
    , takeWhile(() => this.componentActive));
    this.sub = this.store.pipe(select(fromProductState.getCurrentProduct)).subscribe(
      selectedProduct => this.selectedProduct = selectedProduct, takeWhile(() => this.componentActive)
    );

    this.store.dispatch(new fromProductActions.LoadAction);
    //this.productService.getProducts().subscribe(
    //  (products: Product[]) => this.products = products,
   //   (err: any) => this.errorMessage = err.error
  //  );
  this.store.pipe(select(fromProductState.getProducts)).subscribe(
    (products: Product[]) => this.products = products, takeWhile(() => this.componentActive)
  );

  this.errorMessage$ = this.store.pipe(select(fromProductState.getError));
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    this.displayCode = value;
    this.store.dispatch(new fromProductActions.ToggleProductCodeAction(value));
  }

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.productService.changeSelectedProduct(product);
  }

}
