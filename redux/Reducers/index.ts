import { combineReducers } from "redux";
import { IBookingState } from "../Actions/Booking.action";
import { ConfigState } from "../Actions/Config.action";
import BookingReducer from "./BookingReducer";
import ConfigReducer from "./ConfigReducer";

export type IStore = {
    config: ConfigState,
    booking: IBookingState
}
const reducers = combineReducers<IStore>({
    config: ConfigReducer,
    booking: BookingReducer
})

export default reducers;