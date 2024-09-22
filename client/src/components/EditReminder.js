import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store';

export default function EditReminder() {
    let navigate = useNavigate();
    const { id } = useUserStore();

    const [reminder, setReminder] = useState({
        date: '',
        subject: '',
        description: '',
        email: '',
        contactno: '',
        sms: '',
        recurrence: 'No Repeat',
        enable: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'enable') {
          setReminder((prev) => ({ ...prev, enable: checked }));
        } else {
          setReminder((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reminderData = { ...reminder, id: id };

        const response = await fetch('http://localhost:4000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reminderData)
        });

        const j = await response.json();
        if (j.success) {
            navigate("/home");
        }
        else {
            alert(j.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-10 shadow-md rounded-md max-w-lg w-full" onSubmit={handleSubmit}>
                <h2 className="text-center text-2xl font-bold mb-6">Edit Reminder</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Select a Date:</label>
                    <input type="date" name="date" value={reminder.date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
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
                    <textarea name="description" value={reminder.description} onChange={handleChange} className="w-full px-3 py-1 border border-gray-300 rounded-md" rows="3" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" name="email" value={reminder.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Contact No.:</label>
                    <input type="tel" name="contact" value={reminder.contact} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">SMS :</label>
                    <textarea name="sms" value={reminder.sms} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" rows="3" required />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700">Recur For Next:</label>
                    <div className="flex space-x-4 mt-2">
                        <label className="flex items-center">
                            <input type="radio" name="recurrence" value="7 Days" checked={reminder.recurrence === '7 Days'} onChange={handleChange} className="mr-2" />
                            7 Days
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="recurrence" value="5 Days" checked={reminder.recurrence === '5 Days'} onChange={handleChange} className="mr-2" />
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
