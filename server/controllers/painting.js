import express from 'express';
import mongoose from 'mongoose';

import Painting from '../models/painting.js';

const router = express.Router();

export const getRegularPaints = async (req, res) => { 
    try {
        const paintings = await Painting.find({
            paintType: { $ne: 'Original' }
        });
                
        res.status(200).json(paintings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getOriginalPaints = async (req, res) => { 
    try {
        const paintings = await Painting.find({
            paintType: 'Original'
        });
                
        res.status(200).json(paintings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPaint = async (req, res) => { 
    const { id } = req.params;

    try {
        const paint = await Painting.findById(id);
        
        res.status(200).json(paint);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPaint = async (req, res) => {
    const { name, paintType, image, pointColor, brushtrokeColor, collage } = req.body;

    const newPaint= new Painting({ name, paintType, image, pointColor, brushtrokeColor, collage })

    try {
        await newPaint.save();

        res.status(201).json(newPaint);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePaint = async (req, res) => {
    const { id } = req.params;
    const { name, paintType, image  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No paint with id: ${id}`);

    const updatedPaint = { name, paintType, image, _id: id };

    await Painting.findByIdAndUpdate(id, updatedPaint, { new: true });

    res.json(updatedPost);
}

export const deletePaint = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No paint with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Paint deleted successfully." });
}

export default router;
