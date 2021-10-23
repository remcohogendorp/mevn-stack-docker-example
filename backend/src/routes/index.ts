import express from "express";
import productRoutes from "./productRoutes";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Hello, World!" });
});

router.use("/product", productRoutes);

export default router;
