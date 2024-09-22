import React from 'react';

const ReminderCard = ({ reminder }) => {
    return (
        <div className="card p-4">
            <div className="bg-slate-300 text-gray-700 text-base rounded-xl">
                <div className="bg-slate-400 flex flex-row py-1 px-2 rounded-t-xl">
                    <div className="toggle-button">
                        <input type="checkbox" defaultChecked={reminder.isEnabled} />
                        <span className={reminder.isEnabled ? 'enabled' : 'disabled'} />
                    </div>
                    <div className='text-gray-800'>Enable/ Disable</div>
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