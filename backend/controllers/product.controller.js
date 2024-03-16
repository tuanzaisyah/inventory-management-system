import Product from "../models/Product.model.js";
import createError from "../utils/createError.js";

export const addProduct = async (req, res, next) => {
  if (!req.isAdmin)
    return next(createError(403, "Only admin can add a product!"));

  const newProduct = new Product({ userId: req.userId, ...req.body });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  if (!req.isAdmin)
    return next(createError(403, "Only admin can update product!"));

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  if (!req.isAdmin)
    return next(createError(403, "Only admin can delete product!"));

  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product has been deleted!");
  } catch (err) {
    next(err);
  }
};
