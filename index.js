import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();
//mongoose connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING);
    console.log('connected to database');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('datbase disconnected');
});
mongoose.connection.on('connected', () => {
  console.log('datbase connected');
});

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next) => {
  const errorstatus = err.status || 500;
  const errorMessage = err.message || 'something went wrong';
  return res.status(errorstatus).json({
    success: false,
    status: errorstatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 8800, () => {
  connect();
  console.log('connected to backend.');
});
