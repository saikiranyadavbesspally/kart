const INIT_STATE = {
    carts: []
}




export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADDITEM":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
            break;
        case "DELETEITEM":
            const data = state.carts.filter((elements) => elements.id !== action.payload);
            return {
                ...state,
                carts: data
            }
        default:
            return state
    }
}