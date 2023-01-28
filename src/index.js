import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {renderEntireTree} from "./render";

renderEntireTree(state);


reportWebVitals();
