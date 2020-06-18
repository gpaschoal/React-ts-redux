import { createStore, applyMiddleware } from "redux"
import RootReducer from "./Reducers/PokemonReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

export default createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>