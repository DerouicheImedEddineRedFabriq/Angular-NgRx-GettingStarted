import { Product } from "../product";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRootState from "../../state/app.state";

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

export function reducer(state = initialProductState, action): ProductState {
    switch (action.type) {
        case 'TOGGLE_PRODUCT_CODE':
        console.log('initial State : ' + JSON.stringify(state));
        console.log('payload: '+ action.payload);
            return {
                ...state,
                showProductCode: action.payload
            };
        default:
            return state;
    }
}