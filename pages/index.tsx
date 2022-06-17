import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingSlots, IBookingState } from "../redux/Actions/Booking.action";
import { IStore } from "../redux/Reducers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import HotelRoom from "../containers/HotelRoom";
import AvailabilitySlots from "../containers/AvailabilitySlots";
import BookingCard from "../containers/BookingCard";

const Home: NextPage = () => {
    
    return (
        <React.Fragment>
            <div className="homepage py-5">
                <main className="d-flex container-fluid">
                    <AvailabilitySlots />
                    <HotelRoom />
                    <BookingCard />
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
