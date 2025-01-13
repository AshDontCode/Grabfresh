import { Router } from 'express'
import auth from '../middleware/auth.js'
import uploadImageController from '../controllers/uploadImage.controller.js'
import upload from '../middleware/multer.js'

const uploadRouter = Router()

// uploadRouter.post("/upload",auth,upload.single("image"),uploadImageController)

uploadRouter.post(
    "/upload",
    (req, res, next) => {
        console.log("Upload route hit");
        next();
    },
    auth,
    (req, res, next) => {
        console.log("Auth middleware passed");
        next();
    },
    upload.single("image"),
    (req, res, next) => {
        console.log("Multer middleware passed");
        next();
    },
    uploadImageController
);

export default uploadRouter