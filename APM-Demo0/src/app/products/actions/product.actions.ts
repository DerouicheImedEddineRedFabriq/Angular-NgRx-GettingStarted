import { Action } from "@ngrx/store";
import { Product } from "../../products/product";

export enum ProductActionsTypes
{
    ToggleProductCode = "[Product] Toggle Product Code",
    Load = "[Product] Load products",
    LoadSucess = "[Product] Load products Sucess",
    LoadFaild = "[Product] Load products Faild"
}

export class ToggleProductCodeAction implements Action {
    
    readonly type = ProductActionsTypes.ToggleProductCode;
    
    constructor(public payload: boolean)
    {}
}

export class LoadAction implements Action {

    readonly type = ProductActionsTypes.Load;
}

export class LoadSuccess implements Action {
    
    readonly type = ProductActionsTypes.LoadSucess;
    
    constructor(public payload: Product[])
    {}
}

export type ProductActions = ToggleProductCodeAction
| LoadAction
| LoadSuccess;