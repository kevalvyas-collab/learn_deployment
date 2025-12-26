"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_route_1 = __importDefault(require("./routes/customer-route"));
const rate_limiter_1 = __importDefault(require("./middleware/rate-limiter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(rate_limiter_1.default);
app.get("/", function (req, res) {
    res.send("TypeScript Node API running on Render 🚀");
});
app.use("/api/", customer_route_1.default);
exports.default = app;
