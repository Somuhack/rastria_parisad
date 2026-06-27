import Centre from "./centre.model.js";
import { getNextSequence } from "../counter/counter.service.js";
import { generateCentreCode } from "./center.utils.js";

/**
 * CREATE CENTRE
 */
export const createCentre = async (data) => {
  const seq = await getNextSequence("centre");
  const centreCode = generateCentreCode(seq);

  const centre = await Centre.create({
    ...data,
    centreCode,
  });

  return centre;
};

/**
 * GET ALL CENTRES
 */
export const getCentres = async () => {
  return await Centre.find().sort({ createdAt: -1 });
};

/**
 * GET SINGLE CENTRE
 */
export const getCentre = async (id) => {
  return await Centre.findById(id);
};

/**
 * UPDATE CENTRE
 */
export const updateCentre = async (id, data) => {
  return await Centre.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

/**
 * DELETE CENTRE
 */
export const deleteCentre = async (id) => {
  return await Centre.findByIdAndDelete(id);
};

/**
 * UPDATE CENTRE STATUS
 */
export const updateCentreStatus = async (id, status) => {
  return await Centre.findByIdAndUpdate(
    id,
    { status },
    { new: true, runValidators: true }
  );
};  