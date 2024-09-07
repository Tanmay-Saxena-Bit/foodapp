import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://tanmaysaxena78:9818467427@cluster0.y29bcxr.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
