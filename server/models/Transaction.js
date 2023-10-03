import mongoose from "mongoose";
import { loadType } from "mongoose-currency"

const Schema = mongoose.Schema;
loadType(mongoose);

// Transaction Schema
const TransactionSchema = new Schema(
    {
        buyer: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        amount: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        productIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }],
    },
    { timestamps: true, toJSON: { getters: true }}
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;