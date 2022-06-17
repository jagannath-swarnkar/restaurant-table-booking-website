import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../redux/Reducers";
type Props = {
    availableSlots: number;
    tableNumber: string | number;
    tableSize: "SMALL" | "MEDIUM" | "LARGE";
    handleClick: any;
};
const TableChair = (props: Props) => {
    const selectedTable = useSelector((State: IStore) => State.booking.selectedTable);
    const tableAvailablityStatus = props.availableSlots > 4 ? (props.availableSlots > 8 ? "green" : "yellow") : "red";
    return (
        <>
            <div id={String(props.tableNumber)} className="card-cont">
                <div
                    onClick={() => props.handleClick(props.tableNumber)}
                    className={`blur-card ${tableAvailablityStatus} ${selectedTable?.tableNumber == props.tableNumber ? "selected" : ""}`}
                >
                    <div>{props.tableNumber}</div>
                    <div>
                        <span className="bold">{props.availableSlots}</span> <span className="fntSz12">slots available</span>
                    </div>
                    <div>{selectedTable?.tableNumber == props.tableNumber ? "Selected": ""}</div>
                </div>
                <div className="chair-container">
                    <div className="chair-top-row">
                        <div className="chair-item"></div>
                        {props.tableSize === "MEDIUM" && <div className="chair-item"></div>}
                        {props.tableSize === "LARGE" && (
                            <>
                                <div className="chair-item"></div>
                                <div className="chair-item"></div>
                            </>
                        )}
                    </div>
                    <div className="chair-bottom-row">
                        <div className="chair-item"></div>
                        {props.tableSize === "MEDIUM" && <div className="chair-item"></div>}
                        {props.tableSize === "LARGE" && (
                            <>
                                <div className="chair-item"></div>
                                <div className="chair-item"></div>
                            </>
                        )}
                    </div>
                    <div className="chair-left-row">
                        <div className="chair-item"></div>
                        {/* <div className="chair-item"></div> */}
                    </div>
                    <div className="chair-right-row">
                        <div className="chair-item"></div>
                        {/* <div className="chair-item"></div>  */}
                    </div>
                </div>
            </div>
            <style>{}</style>
        </>
    );
};

export default TableChair;
