import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import hotelsRoute from './routes/hotels.js';
import usersRoute from './routes/users.js';
import roomsRoute from './routes/rooms.js';
const app = express();
dotenv.config()

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected to monogoDB');
    } catch (error) {

        throw error;

    }

}
mongoose.connection.on("disconnected", () => {
    console.log('disconnected from DB');
})
mongoose.connection.on("connected", () => {
    console.log('connection is up will connect to mongo database.....');
})
//Middleware for sending json to express server
//middleware can reach service before any user
app.use(express.json());




//middilewares
app.use("/auth", authRoute);
app.use("/hotels", hotelsRoute);
app.use("/users", usersRoute);
app.use("/rooms", roomsRoute)







//HomeRoute
// app.get('/', (req, res) => {
//     res.send("Hello World!");
// })


app.use((err, req, res, next) => {

    const errStatus = err.status || 500
    const errMessage = err.message || "Something went wrong"

    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    });


})





app.listen(8080, () => {
    connect();
    console.log('Server is up and running');
})


