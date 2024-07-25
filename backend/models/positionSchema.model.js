import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    symbol: {           // a.state.name
        type: String,
        required: true
    },
    leverage: {         // a.Leverage
        type: Number,
        required: true
    },
    size: {             // quantity    
        type: Number,
        required: true
    },
    entryPrice: {
        type: Number,
        required: true
    },
    markPrice: {
        type: Number,
        required: true
    },
    liqPrice: {
        type: Number,
        required: true
    },
    margin: {           // (quantity / a.Leverage)
        type: Number,
        required: true
    },
    pnl: {
        type: Number,
        required: true
    },
    pnlPercentage: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export const Position = mongoose.model("Position", positionSchema);
