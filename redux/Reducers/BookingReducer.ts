import { BookingAction, IBookingState } from "../Actions/Booking.action";
import { ActionType, ActionTypes } from "../ActionTypes";

const initialState: IBookingState = {
    slots: null,
    selectedTable: null,
};

const BookingReducer = (state: IBookingState = initialState, action: ActionTypes): IBookingState => {
    switch (action.type) {
        case ActionType.GET_SLOTS:
            return { ...state, slots: action.payload };
        case ActionType.SELECTED_TABLE:
            return {
                ...state,
                selectedTable: action.payload,
            };
        default:
            return state;
    }
};

export default BookingReducer;
