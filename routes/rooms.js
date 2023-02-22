import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("this comes from rooms endpoint");
})

export default router;