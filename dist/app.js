"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var connectDb_1 = __importDefault(require("./config/connectDb"));
var method_override_1 = __importDefault(require("method-override"));
var cors_1 = __importDefault(require("cors"));
connectDb_1.default();
// routes
var postRouter_1 = __importDefault(require("./routers/post/postRouter"));
var userRouter_1 = __importDefault(require("./routers/user/userRouter"));
var app = express_1.default();
app.use(express_1.default.json());
// TODO: CHANGE THIS TO YOUR FRONTEND ORIGIN
app.use(cors_1.default());
app.use(express_1.default.static("views"));
app.use(method_override_1.default("_method"));
app.set("view engine", "ejs");
app.use("/api/post", postRouter_1.default);
app.use("/api/user", userRouter_1.default);
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
app.listen(PORT, function () { return console.log("Listening on port " + PORT); });
