"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dashboard_1 = __importDefault(require("../../controllers/dashboard/dashboard"));
var auth_1 = __importDefault(require("../../middleware/auth"));
var router = express_1.default.Router();
router
    // /admin/dashboard
    .route("/dashboard")
    // get admin page
    .get(auth_1.default, dashboard_1.default);
exports.default = router;
