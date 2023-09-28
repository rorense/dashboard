import mongoose from "mongoose";
import { loadType } from "mongoose-currency"

const Schema = mongoose.Schema;
loadType(mongoose);

// Product Schema
const ProductSchema = new Schema(
    {
        price: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        expense: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        transactions: [{
            type: mongoose/Schema.Types.ObjectId,
            currency: "NZD",
            get: (v) => v / 100,
        }],
    },
    { timestamps: true, toJSON: { getters: true }}
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;