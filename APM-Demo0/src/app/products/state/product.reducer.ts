import { Product } from "../product";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRootState from "../../state/app.state";
import * as fromProductActions  from "../../products/actions/product.actions";

export interface state extends fromRootState.state {

    products: ProductState;
}

export interface ProductState
{
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

const initialProductState: ProductState = 
{
    showProductCode: true,
    currentProduct: null,
    products: null,
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(getProductFeatureState, state => state.showProductCode);

export const getCurrentProduct = createSelector(getProductFeatureState, state => state.currentProduct);

export const getProducts  = createSelector(getProductFeatureState, state => state.products);

export function reducer(state = initialProductState, action: fromProductActions.ProductActions): ProductState {
    switch (action.type) {
        case fromProductActions.ProductActionsTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            };
        case fromProductActions.ProductActionsTypes.LoadSucess : 
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}