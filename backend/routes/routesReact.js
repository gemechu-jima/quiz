import  express  from "express";
import { authenticate } from "../middleware/authenticate.js";
import {getReactQuestion, getJavascriptQuestion, createScore, getScore} from "../controller/controlReact.js";
const router=express.Router()
router.use(authenticate)
router.get("/react", getReactQuestion)
router.get("/javascript", getJavascriptQuestion)
router.post("/score", createScore)
router.get("/score/:email", getScore)

export default router