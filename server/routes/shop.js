import express from 'express';

import { getShop, getShops, createShop } from '../controllers/shop.js';

const router = express.Router();

router.get('/', getShops);
router.post('/', createShop);
router.get('/:id', getShop);

export default router;