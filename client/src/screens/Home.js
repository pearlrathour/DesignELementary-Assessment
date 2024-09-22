import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Card from "../components/Card";
import { useUserStore } from '../store';

export default function Home() {
    const { id } = useUserStore();
    const [reminders, setReminders] = useState([]);

    // setReminders((prevReminders) => [...prevReminders, ...j.data]);

    useEffect(() => {
        async function loadData() {
            const response = await fetch('http://localhost:4000/fetchreminders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id
                })
            });

            const j = await response.json();
            if (j.success) {
                setReminders(j.data.tasks);
                console.log(reminders);
            }
        }
        loadData();
    }, []);

    return (
        <div className="w-screen flex flex-col">
            <Navbar />
            <div className={`flex flex-row flex-wrap py-6 justify-start items-start text-3xl text-gray-400 ${reminders.length ? "" : "bg-blue-50"}`}>
                {reminders.length > 0 ? (
                    reminders.map((reminder) => (
                        <Card reminder={reminder} />
                    ))
                ) : (
                    <div className="w-full flex flex-col justify-start items-center py-[16%] text-center text-gray-500">
                        <div className="flex flex-row">
                            <div className="text-3xl pr-4">: )</div>
                            <div>No reminders found.</div>
                        </div>
                        <div className="text-xl font-medium pl-9">Add your first reminder now!</div>
                    </div>
                )}
            </div>
        </div>
    );
};