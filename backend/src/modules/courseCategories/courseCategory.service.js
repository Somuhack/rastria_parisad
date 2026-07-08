import CourseCategory from "./courseCategory.model.js";

export const createCategory = async (data) => {
  return await CourseCategory.create(data);
};

export const getCategories = async () => {
  return await CourseCategory.find().sort({
    createdAt: -1,
  });
};

export const getCategory = async (id) => {
  return await CourseCategory.findById(id);
};

export const updateCategory = async (id, data) => {
  return await CourseCategory.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const deleteCategory = async (id) => {
  return await CourseCategory.findByIdAndDelete(id);
};