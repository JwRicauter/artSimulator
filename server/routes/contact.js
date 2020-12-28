import express from 'express';

import { getContacts, getContact, createContact } from '../controllers/contact.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/', createContact);
router.get('/:id', getContact);

export default router;