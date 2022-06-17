import { BookingAction, SelectedTableAction } from "./Actions/Booking.action";
import { ConfitAction } from "./Actions/Config.action";


export enum ActionType {
    GET_SLOTS = "GET_SLOTS",
    SET_CONFIG = "SET_CONFIG",
    SELECTED_TABLE = "SELECTED_TABLE"
}

export type ActionTypes = ConfitAction | BookingAction | SelectedTableAction

