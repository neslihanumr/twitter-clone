import {configureStore} from "@reduxjs/toolkit";
import auth from "~/store/auth/index.jsx";

const store = configureStore({
    reducer: {
       auth
    }
})

export default store