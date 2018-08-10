import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ProductService } from '../../products/product.service';
import { ofType } from '@ngrx/effects/src/actions';
import * as fromProductActions from '../actions/product.actions' ;


@Injectable()
export class ProductEffects {

    constructor(private action$:Actions, private productService:ProductService) { }

    @Effect()
    loadProducts$ = this.action$.pipe(ofType(fromProductActions.ProductActionsTypes.Load),
    )
}