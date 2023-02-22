import express from 'express';
const router = express.Router();
import { creatError } from '../utils/error.js';
import Hotel from '../models/Hotel.js';
import { createHotel, upDatedHotel, deleteHotel, getHotel, getAllHotel } from '../controllers/hotel.js';

// router.get('/', (req, res) => {
//     res.send("this comes from hotels endpoint");
// })

//Create
router.post('/', createHotel);

//Update
router.put('/:id', upDatedHotel)
//Delete
router.delete('/:id', deleteHotel)
//get
router.get('/:id', getHotel)

//get all
router.get('/', getAllHotel)


export default router;