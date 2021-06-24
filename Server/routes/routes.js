import express from "express";

import { userSignup, userLogIn} from "../controller/user-controller.js"
import {getProducts} from "../controller/productController.js"

const router = express.Router();

router.post('/signup', userSignup)
router.post('/login', userLogIn)

router.get('/products', getProducts);


export default router;