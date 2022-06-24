import express from 'express';
import {
  createHotel,
  deleteHotelById,
  getAllHotels,
  getHotelById,
  updateHotelById,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create
router.post('/', verifyAdmin, createHotel);
//update
router.put('/:id', verifyAdmin, updateHotelById);
//delete

router.delete('/:id', verifyAdmin, deleteHotelById);
//get
router.get('/:id', getHotelById);
//getAll
router.get('/', getAllHotels);
export default router;
