import React from "react";

const BookingCard = () => {
    return (
        <div className="reservation-container">
            <div className="date_section d-flex justify-content-center">
                <div className="date_item text-center position-relative w-100 p-2">
                    <div className="d-flex justify-content-between w-100">
                        <span>
                            <span className="fntSz20 bold">4</span> slots
                        </span>
                        <div className="fntSz24 bold pr-2">05</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
