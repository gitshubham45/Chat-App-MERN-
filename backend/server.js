const express = require('express');
const chats = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const {notFound , errorHandler} = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

app.use("/api/user" , userRoutes);
app.use("/api/chat" , chatRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, console.log("server listening on port", port))