import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { getBookingSlots } from "../redux/Actions/Booking.action";
import TableChair from "./TableChair";

const HotelRoom = () => {
    const dispatch = useDispatch();
    const handleClickTable = (tableNumber: number | string) => {
        let tn = Number(tableNumber);
        dispatch(getBookingSlots({ tableNumber: tn, date: moment().format("MM-DD-yyyy") }))
    };
    return (
        <div id="hotel-room" className="hotel_room glass d-flex flex-wrap">
            <TableChair handleClick={handleClickTable} availableSlots={12} tableNumber={"01"} tableSize={"MEDIUM"} />
            <TableChair handleClick={handleClickTable} availableSlots={8} tableNumber={"02"} tableSize={"SMALL"} />
            <TableChair handleClick={handleClickTable} availableSlots={2} tableNumber={"03"} tableSize={"MEDIUM"} />
            <TableChair handleClick={handleClickTable} availableSlots={4} tableNumber={"04"} tableSize={"MEDIUM"} />
            <TableChair handleClick={handleClickTable} availableSlots={9} tableNumber={"05"} tableSize={"MEDIUM"} />
            <TableChair handleClick={handleClickTable} availableSlots={6} tableNumber={"06"} tableSize={"MEDIUM"} />
            <TableChair handleClick={handleClickTable} availableSlots={7} tableNumber={"07"} tableSize={"MEDIUM"} />
            <TableChair handleClick={handleClickTable} availableSlots={5} tableNumber={"08"} tableSize={"LARGE"} />
            <TableChair handleClick={handleClickTable} availableSlots={10} tableNumber={"09"} tableSize={"SMALL"} />
            <TableChair handleClick={handleClickTable} availableSlots={0} tableNumber={"10"} tableSize={"LARGE"} />
            <TableChair handleClick={handleClickTable} availableSlots={4} tableNumber={"11"} tableSize={"LARGE"} />
            <TableChair handleClick={handleClickTable} availableSlots={2} tableNumber={"12"} tableSize={"MEDIUM"} />
        </div>
    );
};

export default HotelRoom;
