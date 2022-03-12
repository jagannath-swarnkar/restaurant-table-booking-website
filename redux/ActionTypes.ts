import { BookingAction } from "./Actions/Booking.action";
import { ConfitAction } from "./Actions/Config.action";


export enum ActionType {
    GET_SLOTS = "GET_SLOTS",
    SET_CONFIG= "SET_CONFIG"
}

export type ActionTypes = ConfitAction | BookingAction