import { Router } from 'express';
const router = Router();
// services
import { discoverImages, searchImages } from '../services/images.services.js';

router.get('/discover', discoverImages)
router.get('/?query=:query', searchImages)

export default router;