
import { Router } from "express";
import {upload} from "../middleware/imageUpload.js"
import { signup, login } from "../controller/userControl.js";

const router=Router()

router.post("/signup", upload.single("image"), signup)
router.post("/login", login)


export default router;