import {combineReducers} from 'redux'
import { theme, result } from './reducers'

const rootReducer = combineReducers({
    theme,
    result
})

export default rootReducer