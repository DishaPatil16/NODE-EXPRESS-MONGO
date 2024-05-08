const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const PORT = 8000;
// const users = require("./MOCK_DATA.json");
// const fs = require("fs"); //use for post req
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./Middlewares");
// const mongoose = require("mongoose"); // used to connect node app with running mongo db
// const { timeStamp } = require("console");

// connection
connectMongoDb("mongodb://127.0.0.1:27017/Project-01")
    .then(() => console.log("MongoDb Connected..."))
    .catch((err) => console.log("Error", err));
// mongoose
//   .connect("mongodb://127.0.0.1:27017/Project-01")
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log("Mongo Error: ", err));

// const userSchema = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     jobTitle: {
//       type: String,
//     },
//     gender: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// ); // created , updated time bhi show karta he

// const User = mongoose.model("user", userSchema); //user hamara collection ka naam
// using this User class we can interact we the mongose database

//express middleware - Plugin , data which comes at time of post request  is added in req body by this pulgin
app.use(express.urlencoded({ extended: true })); // checks headers if data coming is xencoded if yes then parse
//this is making changes to the req object
//parsing the form data which came from frontend into req.body

// app.use((req , res , next) => {
//   console.log(`Time : ${Date.now()}`);
//   console.log('hello from middleware 1');
//   next(); //
// });
// app.use((req, res, next) => {
//   fs.appendFile(
//     "./log.txt",
//     `${Date.now()}: ${req.ip}:  ${req.method}: ${req.path}\n`,
//     (err, data) => {
//       next();
//     }
//   );
// });
app.use(logReqRes("./log.txt"));

// app.use((req, res, next) => {
//   console.log("Hello from middleware 2");
//   next(); // iska next automatically points to routes
//   // res.end("Hey");
// });

// Routes
// app.get("/users", async (req, res) => {
// making hybrid server is mobile,alexa get request then /api/users
// const html = `
//       <ul>
//           ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//       </ul>
//   `;
// res.send(html);
//   const allDbUsers = await User.find({});
//   const html = `
//       <ul>
//           ${allDbUsers
//             .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
//             .join("")}
//       </ul>
//   `;
//   res.send(html);
// });

// //REST API
// app.get("/api/users", async (req, res) => {
//   // console.log(req.headers);
//   const allDbUsers = await User.find({});

//   // res.setHeader("X-MyName", "Dishant"); // always add X to custom headers
//   // headers provide info about the req,res
//   // metadata of req , res
//   // kind of data , size , custom headers
//   return res.json(allDbUsers);
// });

// app.get('/api/users/:id' , (req , res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);

// });
// app.post("/api/users", async (req, res) => {
//   // create new user
//   const body = req.body;
//   // console.log('Body' , body);

//   if (
//     !body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title
//   ) {
//     return res.status(400).json({ message: "Please provide all fields." });
//   }
// users.push({ ...body, id: users.length + 1 });
// fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//   return res.status(201).json({ status: "success", id: users.length });
// });

//mongo
//   const result = await User.create({
//     firstName: body.first_name,
//     lastName: body.last_name,
//     email: body.email,
//     jobTitle: body.job_title,
//     gender: body.gender,
//   });
//   // console.log(result);
//   // _id: ObjectId('65bd5665690e5e59084875f8'),
//   //   firstName: 'Saakshi',
//   //   lastName: 'Badgujar',
//   //   email: 'saakshikb@gmail.com',
//   //   jobTitle: 'Doctor',
//   //   gender: 'Female',
//   return res.status(201).json({ Status: "Success" });

//   // return res.json({ status: "pending" });
// });

// app
//   .route("/api/users/:id") // if route changes only need to modify this
//   .get(async (req, res) => {
//     // const id = Number(req.params.id);
//     // const user = users.find((user) => user.id === id);
//     const user = await User.findById(req.params.id)
//     if (!user) {
//       res.status(404).json({ error: "No such user" });
//     }
//     return res.json(user);
//   })
//   .patch(async (req, res) => {
//     // update the user id

//     // 501 - not implemented
//     // res.status(501 ).json({ Status: "Not implemented" });
//     await User.findByIdAndUpdate(req.params.id , {lastName: "DK"});
//     return res.json({Status: "Changed Succesfully"});
//   })
//   .delete( async (req, res) => {
//     // delete user with id
//     // res.status(501).json({ Status: "Not implemented" });
//     await User.findById AndDelete(req.params.id );
//     return res.json({Status: "Deleted"});
//   });

//Routes
app.use("/api/users", userRouter); // /users ke baad ka path route ke ayega
// agar kisi req ka start /users he toh ise use karna

// MVC
// client call userRouter which calls route
// route calls controleer 
// controller changes model of mongo



app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
