import { Dispatch } from "redux";
import { getWithToken } from "../../utils/request";
// import { GetPosts } from "../../services";
import { ActionType, ActionTypes } from "../ActionTypes";

export interface IBookingState {
    slots: IBookingSlots | null,
    selectedTable: QueryParam | null
}

// ---------------------------------action-interfaces---------------------------
export interface BookingAction {
    type: typeof ActionType.GET_SLOTS,
    payload: IBookingSlots
}
export interface SelectedTableAction {
    type: typeof ActionType.SELECTED_TABLE,
    payload: QueryParam
}
type QueryParam = {
    tableNumber: number,
    date: string
}
export interface IBookingSlots {
    allSlots: any,
    availableSlots: number[],
    bookedSlots: number[]
}
export const getBookingSlots = (query: QueryParam) => {
    return async function (dispatch: Dispatch<ActionTypes>) {
        const response = await getWithToken(`/booking/slots?tableNumber=${query.tableNumber}&date=${query.date}`);
        console.log('response', response)
        
        const result = {
            allSlots: response.data.slots,
            availableSlots: response.data.availableSlots,
            bookedSlots: response.data.bookedSlots
        };
        
        dispatch({
            type: ActionType.GET_SLOTS,
            payload: result
        })
        dispatch({
            type: ActionType.SELECTED_TABLE,
            payload: query
        })
    }
}
