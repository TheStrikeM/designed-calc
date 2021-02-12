const initialState = {
    example: "",
    result: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "ADD_TO_EXAMPLE":
        return { ...state, example: state.example + payload }

    case "SOLVE_EXAMPLE":
        try {
            return { ...state, result: eval(state.example) }
        }

        catch {
            return { ...state, result: "" }
        }
        return { ...state, result: "" }
        

    case "CLEAR_EXAMPLE":
        return { ...state, example: "" }

    case "CLEAR_RESULT":
        return { ...state, result: "" }

    default:
        return state
    }
}
