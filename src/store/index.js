import { createStore } from "redux";
import { rootReredecer } from "./root-reducer";

export const store = createStore(
    rootReredecer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );