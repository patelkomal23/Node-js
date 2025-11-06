import { Router } from "express";
import { addMoviePage, deshboard, addMovie } from "../../controllers/server/adminPanel.controller.js";
import imageUpload from "../../middlewares/imageUpload.js";

const adminPanelRouter = Router();

adminPanelRouter.get('/',deshboard);
adminPanelRouter.get('/add-movie',addMoviePage);
adminPanelRouter.post('/add-movie',imageUpload,addMovie);


export default adminPanelRouter;