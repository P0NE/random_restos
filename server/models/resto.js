const mongoose = require("mongoose");

const { Schema } = mongoose;

const RestoSchema = new Schema(
  {
    name: String,
    description: String,
    rating: Number
  },
  { timestamps: true }
);

RestoSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    name: this.name,
    description: this.description,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model("Restos", RestoSchema);
