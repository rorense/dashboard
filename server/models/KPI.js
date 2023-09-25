import mongoose from "mongoose";
import { loadType } from "mongoose-currency"

const Schema = mongoose.Schema;
loadType(mongoose);

// Schema for daily
const daySchema = new Schema(
    {
        date: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
    },
    { toJSON: { getters: true }}
)

// Schema for monthly
const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },   
    },
    { toJSON: { getters: true }}
)

// KPI Schema
const KPISchema = new Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        totalExpenses: {
            type: mongoose.Types.Currency,
            currency: "NZD",
            get: (v) => v / 100,
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "NZD",
                get: (v) => v / 100,
            }
        },
        // Linking back previous schemas
        monthlyData: [monthSchema],
        dailyData: [daySchema],
    },
    { timestamps: true, toJSON: { getters: true }}
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;