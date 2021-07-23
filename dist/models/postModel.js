"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var postSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
    },
    img: {
        type: String,
    },
}, {
    timestamps: true,
});
var Post = mongoose_1.default.model("Post", postSchema);
exports.default = Post;
