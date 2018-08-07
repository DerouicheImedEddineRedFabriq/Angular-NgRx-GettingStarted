import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface userState
{
    maskUserName: boolean,
}

const initialUserState: userState =
{
    maskUserName: true
}

const getUserStateFeateSelector = createFeatureSelector<userState>('users');

export const getMaskUserName = createSelector(getUserStateFeateSelector, state => state.maskUserName);

export function reducer(state = initialUserState, action)
{
    switch(action.type)
    {
        case 'MASK_USER_NAME' :
            console.log('initial State : ' + JSON.stringify(state));
            console.log('payload: '+ action.payload);
            return{
                ...state,
                maskUserName: action.payload
            };
        default:
        {
            return state;
        }
    }
}