"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var createPost_1 = __importDefault(require("../../controllers/post/createPost"));
var deletePost_1 = __importDefault(require("../../controllers/post/deletePost"));
var getAllPosts_1 = __importDefault(require("../../controllers/post/getAllPosts"));
var getOnePost_1 = __importDefault(require("../../controllers/post/getOnePost"));
var updatePost_1 = __importDefault(require("../../controllers/post/updatePost"));
var auth_1 = __importDefault(require("../../middleware/auth"));
var router = express_1.default.Router();
router
    // /post/
    .route("/")
    // GET
    //all posts
    .get(getAllPosts_1.default)
    // POST
    // create post
    .post(auth_1.default, createPost_1.default);
// /post/:id
router
    .route("/:id")
    // GET /post/:id
    // get one post
    .get(getOnePost_1.default)
    // Update one post
    // PUT
    .put(auth_1.default, updatePost_1.default)
    // delete post
    // DELETE /post/:id
    .delete(auth_1.default, deletePost_1.default);
exports.default = router;
