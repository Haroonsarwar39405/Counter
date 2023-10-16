import { createStore } from "redux";
import { Myreducer } from "./reducer/myreducer";
const store=createStore(Myreducer)
export default store