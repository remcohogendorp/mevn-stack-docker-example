import { Request, Response, NextFunction } from "express";
import Product from "../models/Product";
import { Error } from "mongoose";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = (await Product.find()) || {};
    res.status(200).json({
      status: "succes",
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "succes",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
    });
  }
};

const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Product.create(req.body);

    res.status(200).json({
      status: "succes",
    });
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      res.status(200).json({
        status: error.message,
      });
    } else {
      res.status(400).json({
        status: "failed",
      });
    }
  }
};

export { getAll, post, get };
