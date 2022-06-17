import moment from "moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { getBookingSlots } from "../redux/Actions/Booking.action";
import { IStore } from "../redux/Reducers";

const AvailabilitySlots = () => {
    const dispatch = useDispatch();
    const selectedTable = useSelector((State: IStore) => State.booking.selectedTable);
    const slots = useSelector((State: IStore) => State.booking.slots);
    const [selectedSlots, setSelectedSlots] = useState<number[]>([]);
    const [selectedDate, setSelectedDate] = useState<any>(selectedTable ? new Date(selectedTable.date) : new Date());

    useEffect(()=>{
        setSelectedSlots([])
    },[slots])
    const handleSelectSlots = (item: any) => {
        const existingIndex = selectedSlots.findIndex((slot) => item.slotNumber == slot);
        if (existingIndex >= 0) {
            const slotIns = [...selectedSlots];
            slotIns.splice(existingIndex, 1);
            setSelectedSlots(slotIns);
        } else {
            setSelectedSlots((pre) => [...pre, item.slotNumber]);
        }
    };
    
    return (
        <div className="availablity_table glass border-none">
            <div className="slots-container">
                <div className="date_section d-flex justify-content-center">
                    <div className="date_item text-center position-relative">
                        {moment(selectedDate).format("dddd")}
                        <br />
                        <label htmlFor="slot-date" className="text-muted">
                            {selectedDate.toLocaleDateString()}
                        </label>
                        <DatePicker
                            id="slot-date"
                            className="d-none"
                            selected={selectedDate}
                            onChange={(date: any) => setSelectedDate(date)}
                            todayButton="Today"
                        />
                    </div>
                </div>

                <ul>
                    {slots?.allSlots
                        .filter((item: any) => item.status === "AVAILABLE")
                        .map((slot: any) => (
                            <li
                                id={slot.slotNumber}
                                onClick={() => handleSelectSlots(slot)}
                                className={selectedSlots?.includes(slot.slotNumber) ? "active" : ""}
                            >
                                <span className="fntSz12 pr-2">Slot: </span>
                                <span className="bold slot_time txt-muted">{slot.slot}</span>
                            </li>
                        ))}
                </ul>
                <hr className="m-0" />
                {!selectedTable && (
                    <div className="d-flex px-3 py-5">
                        <p className="text-muted text-center">Select a table to get slots.</p>
                    </div>
                )}
                {selectedTable && !slots?.allSlots.filter((item: any) => item.status === "AVAILABLE")?.length && (
                    <div className="d-flex px-3 py-5">
                        <p className="text-muted text-center">No slots availble for this table.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AvailabilitySlots;
