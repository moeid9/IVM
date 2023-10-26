const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String },
    colour: { type: String },
    productImage: { type: String },
    quantity: { type: Number },
    amountPerPack: { type: Number },
    price: { type: mongoose.Decimal128 },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
