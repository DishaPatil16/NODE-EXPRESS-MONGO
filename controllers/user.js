const User = require("../models/user");

async function handleGetAllUsers(req , res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
};

async function handleGetUserById(req , res) {
    const user = await User.findById(req.params.id)
    if (!user) {
    res.status(404).json({ error: "No such user" });
    }
    return res.json(user);
};

async function handleUpdateUserById(req , res) {
    await User.findByIdAndUpdate(req.params.id , {lastName: "DK"});
    return res.json({Status: "Changed Succesfully"});
};

async function handleDeleteUserById(req , res) {
    await User.findByIdAndDelete(req.params.id );
    return res.json({Status: "Deleted"});
};

async function handleCreateUserById(req , res) {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ message: "Please provide all fields." });
    }
    //mongo
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender,
    });
    return res.status(201).json({ Status: "Success" , ID: result._id});
};



module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUserById

};