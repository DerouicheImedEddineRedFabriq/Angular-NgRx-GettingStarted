import { Action } from "@ngrx/store";

export enum ProductActionsTypes
{
    ToggleProductCode = "[Product] Toggle Product Code",
    Load = "[Product] Load products"
}

export class ToggleProductCodeAction implements Action {
    
    readonly type = ProductActionsTypes.ToggleProductCode;
    
    constructor(public payload: boolean)
    {}
}

export class LoadAction implements Action {

    readonly type = ProductActionsTypes.Load;
}

export type ProductActions = ToggleProductCodeAction
| LoadAction;