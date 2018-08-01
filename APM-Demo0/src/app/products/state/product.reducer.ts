export function reducer(state, action) {
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