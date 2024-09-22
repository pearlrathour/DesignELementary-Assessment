import React from "react";
import Navbar from '../components/Navbar';
// import Card from "../../components/User/bookings";

export default function Home() {
    return (
        <div className="w-screen flex flex-row">
            <Navbar />
            {/* <div className="w-full flex flex-col justify-start items-center ml-[16.6%]">
                <Bookings/>
            </div> */}
        </div>
    );
};