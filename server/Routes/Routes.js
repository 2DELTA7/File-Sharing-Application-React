import express from 'express';
import { uploadImage,downloadImage } from '../Controllers/ImageController.js';
import upload from '../utils/Upload.js'

const router = express.Router();      

router.post('/upload',upload.single('file'),uploadImage);

router.get('/file/:fileId',downloadImage);

export default router;