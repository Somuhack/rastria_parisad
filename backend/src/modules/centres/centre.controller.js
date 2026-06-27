import {
  createCentre,
  getCentres,
  getCentre,
  updateCentre,
  deleteCentre,
  updateCentreStatus,
} from "./centre.service.js";

/**
 * CREATE CENTRE
 */
export const createCentreController = async (req, res) => {
  try {
    const centre = await createCentre(req.body);

    res.status(201).json({
      success: true,
      message: "Centre created successfully",
      data: centre,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * GET ALL CENTRES
 */
export const getCentresController = async (req, res) => {
  try {
    const centres = await getCentres();

    res.json({
      success: true,
      count: centres.length,
      data: centres,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * GET SINGLE CENTRE
 */
export const getCentreController = async (req, res) => {
  try {
    const centre = await getCentre(req.params.id);

    if (!centre) {
      return res.status(404).json({
        success: false,
        message: "Centre not found",
      });
    }

    res.json({
      success: true,
      data: centre,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * UPDATE CENTRE
 */
export const updateCentreController = async (req, res) => {
  try {
    const centre = await updateCentre(req.params.id, req.body);

    if (!centre) {
      return res.status(404).json({
        success: false,
        message: "Centre not found",
      });
    }

    res.json({
      success: true,
      message: "Centre updated successfully",
      data: centre,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * DELETE CENTRE
 */
export const deleteCentreController = async (req, res) => {
  try {
    const centre = await deleteCentre(req.params.id);

    if (!centre) {
      return res.status(404).json({
        success: false,
        message: "Centre not found",
      });
    }

    res.json({
      success: true,
      message: "Centre deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * UPDATE CENTRE STATUS
 */
export const updateCentreStatusController = async (req, res) => {
  try {
    const centre = await updateCentreStatus(
      req.params.id,
      req.body.status
    );

    if (!centre) {
      return res.status(404).json({
        success: false,
        message: "Centre not found",
      });
    }

    res.json({
      success: true,
      message: "Centre status updated successfully",
      data: centre,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};