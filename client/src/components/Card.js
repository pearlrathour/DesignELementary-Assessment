import React from 'react';
import { useUserStore } from '../store';
import { TrashIcon } from '@heroicons/react/24/solid';

const ReminderCard = ({ reminder }) => {
    const { id } = useUserStore();

    const handleDelete = async (taskId, e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/del', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: id,
                taskId: taskId
            })
        });
        const j = await response.json();
        if (j.success) {
            window.location.reload();
            alert("Thank you, your reminder is deleted successfully !!!");
        }
    };

    return (
        <div className="card p-4">
            <div className="bg-slate-300 text-gray-700 text-base rounded-xl">
                <div className="bg-slate-400 flex flex-row items-center justify-end py-1 px-2 rounded-t-xl">
                    {/* <div className='flex flex-row gap-x-3 px-2'>
                        <div className="toggle-button">
                            <input type="checkbox" className='h-4 w-4' defaultChecked={reminder.isEnabled} />
                            <span className={reminder.isEnabled ? 'enabled' : 'disabled'} />
                        </div>
                        <div className='text-gray-800'>Enable/ Disable</div>
                    </div> */}
                    <button type="submit" className="flex flex-row justify-end" onClick={(e) => handleDelete(reminder._id, e)}>
                            <TrashIcon className="h-5 w-6 hover:h-6 text-gray-800 hover:text-red-700" />
                        </button>
                </div>
                <div className='px-3'>Date: {reminder.date}</div>
                <div className='px-3'>Email: {reminder.email}</div>
                <div className='px-3'>Contact No: {reminder.contactno}</div>
                <div className='px-3'>SMS: {reminder.sms}</div>
                <div className='px-3 pb-3'>Recur after: {reminder.repeat}</div>
            </div>
        </div>
    );
};

export default ReminderCard;