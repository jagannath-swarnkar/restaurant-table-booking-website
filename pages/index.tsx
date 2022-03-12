import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingSlots, IBookingState } from "../redux/Actions/Booking.action";
import { IStore } from "../redux/Reducers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const Home: NextPage = () => {
    const dispatch = useDispatch();
    const slots = useSelector((State: IStore) => State.booking.slots);
    const [selectedTable, setSelectedTable] = useState(4);
    const [selectedDate, setSelectedDate] = useState(new Date());
    useEffect(() => {
        let datetime = moment(selectedDate).format("yyyy-MM-DD")
        dispatch(getBookingSlots({ tableNumber: selectedTable, date: datetime }));
    }, [selectedTable, selectedDate]);
    return (
        <React.Fragment>
            <div className="homepage py-5">
                <main className="d-flex container-fluid">
                    <div className="availablity_table glass">
                        <div className="date_section d-flex justify-content-center">
                            {/* <span className="pointer">{"<"}</span> */}
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
                            {/* <span className="pointer">{">"}</span> */}
                        </div>
                        <ul>
                            {slots?.allSlots
                                .filter((item: any) => item.status === "AVAILABLE")
                                .map((slot: any) => (
                                    <li className="">
                                        <span className="fntSz12 pr-2">Slot: </span>
                                        <span className="bold slot_time txt-muted">{slot.slot}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="tables_ui">Select a table</div>
                    <div className="reserve-popup">reserve your table</div>
                </main>
            </div>
            <style>{`
          .react-datepicker-wrapper{
            position: absolute;
            width: 100%;
            left: 0;
            right: 0;
            z-index: -1;
          }
        `}</style>
        </React.Fragment>
    );
};

export default Home;
