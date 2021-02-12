export const clearResult = () => ({
    type: "CLEAR_RESULT"
})

export const clearExample = () => ({
    type: "CLEAR_EXAMPLE"
})

export const solveExample = () => ({
    type: "SOLVE_EXAMPLE"
})

export const addToExample = (payload) => ({
    type: "ADD_TO_EXAMPLE",
    payload: payload
})