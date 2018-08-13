import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../../products/product.service';
import * as fromProductActions from '../actions/product.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Product } from 'src/app/products/product';


@Injectable()
export class ProductEffects {

    constructor(private action$: Actions, private productService: ProductService) { }

    @Effect()
    loadProducts$ = this.action$.pipe(ofType(fromProductActions.ProductActionsTypes.Load),
        mergeMap((action: fromProductActions.LoadAction) => this.productService.getProducts().pipe(
            map((products: Product[]) => (new fromProductActions.LoadSuccess(products)))
        )
      )
    );
}