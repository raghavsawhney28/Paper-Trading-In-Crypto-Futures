
import { Position } from "../models/positionSchema.model";

export const addPosition = async (req, res) => {
    const { userId, symbol, leverage, size, entryPrice, markPrice, liqPrice, margin, pnl, pnlPercentage } = req.body;
    console.log(req.body);
    try {
        const newPosition = new Position({ userId, symbol, leverage, size, entryPrice, markPrice, liqPrice, margin, pnl, pnlPercentage });
        const savedPosition = await newPosition.save();
        res.json(savedPosition);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getUserPositions = async (req, res) => {
    try {
        const positions = await Position.find({ userId: req.params.userId });
        res.json(positions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deletePosition = async (req, res) => {
    try {
        const deletedPosition = await Position.findByIdAndDelete(req.params.id);
        res.json(deletedPosition);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
