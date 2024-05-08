const express = require("express");
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateUserById } = require("../controllers/user");
const router = express.Router();



// Routes
// router.get("/", async (req, res) => {

//     const allDbUsers = await User.find({});
//     const html = `
//         <ul>
//             ${allDbUsers
//                 .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
//                 .join("")}
//         </ul>
//     `;
//     res.send(html);
// });

// //REST API
// router.get("/", async (req, res) => {
//     const allDbUsers = await User.find({});

//     return res.json(allDbUsers);
// });
router.route("/").get( handleGetAllUsers).post(handleCreateUserById);


// router.post("/", async (req, res) => { 
//     const body = req.body;
//     if (
//         !body || 
//         !body.first_name ||
//         !body.last_name ||
//         !body.email ||
//         !body.gender ||
//         !body.job_title
//     ) {
//         return res.status(400).json({ message: "Please provide all fields." });
//     }
//     //mongo
//     const result = await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         jobTitle: body.job_title,
//         gender: body.gender,
//     });
//     return res.status(201).json({ Status: "Success" });

// });

router
    .route("/:id")
        // .get(async (req, res) => {
            // const user = await User.findById(req.params.id)
            // if (!user) {
            // res.status(404).json({ error: "No such user" });
            // }
            // return res.json(user);
            
        // })
        .get(handleGetUserById)

        // .patch(async (req, res) => {
        //     await User.findByIdAndUpdate(req.params.id , {lastName: "DK"});
        //     return res.json({Status: "Changed Succesfully"});
        // })
        .patch(handleUpdateUserById)

        // .delete( async (req, res) => {
        //     await User.findByIdAndDelete(req.params.id );
        //     return res.json({Status: "Deleted"});
        // });
        .delete( handleDeleteUserById );

module.exports = router;