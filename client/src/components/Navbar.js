import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import "../index.css";
import { UserCircleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { useUserStore } from '../store';

export default function Navbar() {
    let navigate = useNavigate();
    const { clearUser } = useUserStore();
    const handleLogout = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/del', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const j = await response.json();
        if (j.success) {
            clearUser();
            navigate("/");
        }
        else {
            alert("Unable to Logout!!!");
        }
    };

    return (
        <div id="navbar" className="sticky w-full top-0 backdrop-filter backdrop-blur-2xl bg-slate-600 bg-opacity-30 z-10">
            <nav className="bg-black-800">
                <div className="flex flex-row text-black h-20 items-center justify-between">
                    <div className="text-3xl font-semibold text-gray-700 ml-20 hidden sm:inline">Reminder App</div>

                    <div className="flex flex-row gap-x-4 items-center pr-2 text-black">
                        <Link to="/addreminder" className="px-5 py-1.5 mr-2 bg-gray-400 rounded-xl hover:bg-gray-500">Add Reminder</Link>
                        <form className="ml-2 mr-6" onSubmit={handleLogout}>
                            <button type="submit" className="flex justify-start space-x-4 px-4 py-1.5 bg-gray-400 rounded-xl hover:bg-gray-500">
                                <ArrowRightStartOnRectangleIcon className="h-6 w-6 hover:text-red-500" />
                                <div>Logout</div>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};
