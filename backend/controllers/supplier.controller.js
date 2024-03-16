import Supplier from "../models/Supplier.model.js";
import createError from "../utils/createError.js";

export const addSupplier = async (req, res, next) => {
  if (!req.isAdmin)
    return next(createError(403, "Only admin can add new supplier!"));

  const newSupplier = new Supplier({ userId: req.userId, ...req.body });

  try {
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (err) {
    next(err);
  }
};

export const updateSupplier = async (req, res, next) => {
  if (!req.isAdmin)
    return next(createError(403, "Only admin can update supplier!"));

  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedSupplier);
  } catch (err) {
    next(err);
  }
};

export const getSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.findById(req.params.id);

    res.status(200).send(supplier);
  } catch (err) {
    next(err);
  }
};

export const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await Supplier.find();

    res.status(200).json(suppliers);
  } catch (err) {
    next(err);
  }
};

export const deleteSupplier = async (req, res, next) => {
  if (!req.isAdmin)
    return next(createError(403, "Only admin can delete supplier!"));

  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.status(200).send("Supplier has been deleted!");
  } catch (err) {
    next(err);
  }
};
