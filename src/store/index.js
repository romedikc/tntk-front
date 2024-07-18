import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import bookSlice from "./bookSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    orders: orderSlice,
    books: bookSlice,
    users: userSlice,
  },
});
