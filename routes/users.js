import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("this comes from users endpoint");
})

export default router;