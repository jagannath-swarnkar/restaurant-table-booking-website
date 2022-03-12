import { BookingAction, IBookingState } from "../Actions/Booking.action";
import { ActionType, ActionTypes } from "../ActionTypes"


const initialState: IBookingState = {
    slots: null
}

const BookingReducer = (state: IBookingState = initialState, action: BookingAction): IBookingState=> 
{
    switch(action.type)
    {
        case ActionType.GET_SLOTS:
            return {...state, slots: action.payload}

        default:
            return state;
    }
}

export default BookingReducer