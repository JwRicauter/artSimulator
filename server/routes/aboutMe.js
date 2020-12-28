import express from 'express';

import { getBio, updateBio } from '../controllers/aboutMe.js';

const router = express.Router();

router.get('/', getBio);
router.patch('/:id', updateBio);

export default router;