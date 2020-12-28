import express from 'express';
import mongoose from 'mongoose';

import AboutMe from '../models/aboutMe.js';

const router = express.Router();

export const getBio = async (req, res) => { 
    try {
        const aboutMe = await AboutMe.find({}).sort({_id: -1}).limit(1);
                
        res.status(200).json(aboutMe);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateBio = async (req, res) => {
    const { id } = req.params;
    const { message, image  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No paint with id: ${id}`);

    const updatedBio = { message, image, _id: id };

    await Painting.findByIdAndUpdate(id, updatedBio, { new: true });

    res.json(updatedBio);
}

export default router;
