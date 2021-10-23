import express from "express";
import { getAll, post, get } from "../controllers/product";

const router = express.Router();

router.route("/").get(getAll).post(post);
router.route("/:id").get(get);

export default router;
