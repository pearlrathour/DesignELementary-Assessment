import React from 'react';

const ReminderCard = ({ reminder }) => {
    return (
        <div className="card p-2">
            {/* <div className="bg-red-400">
                <div className="toggle-button">
                    <input type="checkbox" defaultChecked={reminder.isEnabled} />
                    <span className={reminder.isEnabled ? 'enabled' : 'disabled'} />
                </div>
            </div> */}
            <div className="bg-red-500">
                <h5 className="card-title">{reminder.title}</h5>
                <p className="card-text">{reminder.description}</p>
                <p className="card-text">
                    <strong>Reminder Date:</strong> {reminder.reminderDate}
                </p>
                <p className="card-text">
                    <strong>Contact No:</strong> {reminder.contactNo}
                </p>
            </div>
        </div>
    );
};

export default ReminderCard;