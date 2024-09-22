import React, { useState } from 'react';

export default function ReminderForm() {
    const [reminder, setReminder] = useState({
        date: '',
        subject: '',
        description: '',
        email: '',
        contact: '',
        sms: '',
        recurrence: 'No Repeat',
        enable: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setReminder((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reminder Details:', reminder);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-10 shadow-md rounded-md max-w-lg w-full" onSubmit={handleSubmit}>
                <h2 className="text-center text-2xl font-bold mb-6">Set a New Reminder</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Select a Date:</label>
                    <input type="date" name="date" value={reminder.date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" required/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Select a Subject:</label>
                    <select name="subject" value={reminder.subject} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                        <option value="" disabled>Select a subject</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Add Description:</label>
                    <textarea name="description" value={reminder.description} onChange={handleChange} className="w-full px-3 py-1 border border-gray-300 rounded-md" rows="3"/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" name="email" value={reminder.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Contact No.:</label>
                    <input type="tel" name="contact" value={reminder.contact} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" required/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">SMS :</label>
                    <textarea name="sms" value={reminder.sms} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" rows="3" required />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700">Recur For Next:</label>
                    <div className="flex space-x-4 mt-2">
                        <label className="flex items-center">
                            <input type="radio" name="recurrence" value="7 Days" checked={reminder.recurrence === '7 Days'} onChange={handleChange} className="mr-2"/>
                            7 Days
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="recurrence" value="5 Days" checked={reminder.recurrence === '5 Days'} onChange={handleChange} className="mr-2"/>
                            5 Days
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="recurrence" value="3 Days" checked={reminder.recurrence === '3 Days'} onChange={handleChange} className="mr-2" />
                            3 Days
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="recurrence" value="2 Days" checked={reminder.recurrence === '2 Days'} onChange={handleChange} className="mr-2" />
                            2 Days
                        </label>
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Confirm</button>
            </form>
        </div>
    );
}
