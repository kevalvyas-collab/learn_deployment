"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const constant_1 = __importDefault(require("./lib/constant"));
const PORT = constant_1.default.ENV_CONFIG.PORT;
app_1.default.listen(PORT, () => console.log(`server are listen on port --- > ${PORT}`));
