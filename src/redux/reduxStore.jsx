import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './Reducer/profileReducer'
import dialogsReducer from './Reducer/dialogsReducer'
import sidebarReducer from './Reducer/sidebarReducer'

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebarReducer : sidebarReducer

})

let store = createStore(reducers)

export default store