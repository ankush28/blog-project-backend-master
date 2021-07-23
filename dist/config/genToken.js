"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var genToken = function (id) {
    try {
        if (typeof process.env.JWT_SECRET !== "string")
            throw Error("JWT secret must be provided");
        var token = jsonwebtoken_1.default.sign({ id: id }, process.env.JWT_SECRET, {
            expiresIn: 604800,
        }); // 7 days
        return [token, null];
    }
    catch (error) {
        return [null, error.message];
    }
};
exports.default = genToken;
