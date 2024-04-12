import express from 'express';
import { uploadImage } from '../Controllers/ImageController.js';

const router = express.Router();      

router.post('/upload',uploadImage);

export default router;