"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var createNewUser_1 = __importDefault(require("../../controllers/user/createNewUser"));
var getUserDetails_1 = __importDefault(require("../../controllers/user/getUserDetails"));
var loginUser_1 = __importDefault(require("../../controllers/user/loginUser"));
var updateUser_1 = __importDefault(require("../../controllers/user/updateUser"));
var auth_1 = __importDefault(require("../../middleware/auth"));
var router = express_1.default.Router();
// /user
router
    .route("/")
    // create new user
    // POST /user
    .post(createNewUser_1.default);
router
    .route("/login")
    // /user/login
    // POST
    // logs in user
    .post(loginUser_1.default);
router
    .route("/:id")
    // /user/:id
    // GET
    // gets user details
    .get(auth_1.default, getUserDetails_1.default)
    // update user
    // PUT /user
    .put(auth_1.default, updateUser_1.default);
exports.default = router;
