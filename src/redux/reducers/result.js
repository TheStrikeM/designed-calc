const initialState = {
    example: "",
    result: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "ADD_TO_EXAMPLE":
        return { ...state, example: state.example + payload }

    case "SOLVE_EXAMPLE":
        return { ...state, result: eval(state.example) }

    case "CLEAR_EXAMPLE":
        return { ...state, example: "" }

    case "CLEAR_RESULT":
        return { ...state, result: 0 }

    default:
        return state
    }
}
