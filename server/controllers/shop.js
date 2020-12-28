import express from 'express';
import mongoose from 'mongoose';

import Shop from '../models/shop.js';

const router = express.Router();

export const getShops = async (req, res) => { 
    try {
        const shops = await Painting.find({});
                
        res.status(200).json(shops);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getShop = async (req, res) => { 
    const { id } = req.params;

    try {
        const shop = await Shop.findById(id);
        
        res.status(200).json(shop);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createShop = async (req, res) => {
    const { painting, name, email, shipping } = req.body;

    const newPurchase= new Shop({ painting, name, email, shipping })

    try {
        await newPaint.save();

        res.status(201).json(newPurchase);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;
