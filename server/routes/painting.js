import express from 'express';

import { getRegularPaints, getOriginalPaints, getPaint, createPaint, updatePaint, deletePaint } from '../controllers/painting.js';

const router = express.Router();

router.get('/regular', getRegularPaints);
router.get('/original', getOriginalPaints);
router.post('/', createPaint);
router.get('/:id', getPaint);
router.patch('/:id', updatePaint);
router.delete('/:id', deletePaint);

export default router;