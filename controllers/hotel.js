import Hotel from "../models/Hotel.js";
export const createHotel = async (req, res, next) => {

    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    }
    catch (err) {
        next(err);

    }


}
export const upDatedHotel = async (req, res, next) => {

    // const newHotel = new Hotel(req.body);

    try {
        const upDatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(upDatedHotel);

    }
    catch (err) {
        next(err);

    }


}
export const deleteHotel = async (req, res, next) => {

    // const newHotel = new Hotel(req.body);

    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedHotel);
        res.send("Hotel Entry deleted successfully");

    }
    catch (err) {
        next(err);

    }


}
export const getHotel = async (req, res, next) => {

    // const newHotel = new Hotel(req.body);

    try {
        const listOfHotel = await Hotel.findById(req.params.id);
        res.status(200).json(listOfHotel);
        res.send("Hotel Entry deleted successfully");

    }
    catch (err) {
        next(err);

    }


}
export const getAllHotel = async (req, res, next) => {

    // const newHotel = new Hotel(req.body);


    try {
        const listOfHotel = await Hotel.find();
        res.status(200).json(listOfHotel);
        res.send("Hotel Entry deleted successfully");

    }
    catch (err) {
        next(err);

    }


}
