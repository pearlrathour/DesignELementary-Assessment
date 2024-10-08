const User = require("../models/user");
const Task = require("../models/task");

module.exports.add = async (req, res) => {
    console.log(req.body);
    const { id, date, subject, description, email, contactno, sms, repeat } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const task = new Task({ date, subject, description, email, contactno, sms, repeat, enable: true });
        user.tasks.push(task);
        await task.save();
        await user.save();
        res.json({ success: true });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error while adding reminder' });
    }
};

module.exports.delete = async (req, res) => {
    const { userId, taskId } = req.body;
    
    try {
        await Task.findOneAndDelete({ _id: taskId });
        await User.findByIdAndUpdate(userId, { $pull: { tasks: taskId } });
        res.json({ success: true });
    }
    catch (error) {
        res.json({ success: false });
    }
};

module.exports.edit = async (req, res) => {
    const { id, date, subject, description, email, contactno, sms, repeat, enable } = req.body;

    try {
        await Task.findByIdAndUpdate({ _id: id }, { $set: { date: date, subject: subject, description: description, email: email, contactno: contactno, sms: sms, repeat: repeat, enable: enable } });
        res.json({ success: true });
    }
    catch (error) {
        res.json({ success: false });
    }
};

module.exports.enable = async (req, res) => {
    const { id, date, subject, description, email, contactno, sms, repeat, enable } = req.body;

    try {
        await Task.findByIdAndUpdate({ _id: id }, { $set: { date: date, subject: subject, description: description, email: email, contactno: contactno, sms: sms, repeat: repeat, enable: enable } });
        res.json({ success: true });
    }
    catch (error) {
        res.json({ success: false });
    }
};

module.exports.fetchreminders = async (req, res) => {
    const { id } = req.body;

    try {
        const user = await User.findById(id).populate({
            path: 'tasks',
            model: 'Task'
        });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({success: true, data: user});
    }
    catch (error) {
        res.json({ success: false });
    }
};

module.exports.fetchreminder = async (req, res) => {
    const { id } = req.body;

    try {
        const rem = await Task.findById(id);
        res.json({success: true, data: rem});
    }
    catch (error) {
        res.json({ success: false });
    }
};