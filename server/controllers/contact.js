import express from 'express';
import mongoose from 'mongoose';

import Contact from '../models/contact.js';

const router = express.Router();

export const getContacts = async (req, res) => { 
    try {
        const contacts = await Painting.find();
                
        res.status(200).json(contacts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getContact = async (req, res) => { 
    const { id } = req.params;

    try {
        const contact = await Contact.findById(id);
        
        res.status(200).json(contact);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createContact = async (req, res) => {
    const { name, email, phone, date, message } = req.body;

    const newContact = new Painting({ name, email, phone, date, message })

    try {
        await newContact.save();

        res.status(201).json(newContact);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;
