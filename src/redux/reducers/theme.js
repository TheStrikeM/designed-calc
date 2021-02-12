const initialState = {
    theme: "light"
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "SET_THEME":
        return { ...state, theme: payload }
        
    default:
        return state
    }
}
