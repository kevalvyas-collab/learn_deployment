"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const postgres_1 = __importDefault(require("../lib/db/postgres"));
const response_dispatcher_1 = __importDefault(require("../lib/response-dispatcher"));
class CustomerController {
    constructor() {
        this.register = async (req, res) => {
            try {
                const { email, password } = req.body;
                const hash = await bcrypt_1.default.hash(password, 10);
                const insertQuery = `insert into app_users(email, password) values($1, $2)`;
                await postgres_1.default.writeQuery(insertQuery, [email, hash]);
                response_dispatcher_1.default.dispatch(res, `This email are successfully register`);
            }
            catch (error) {
                console.error(error);
            }
        };
        this.login = (req, res) => {
        };
    }
}
const customerController = new CustomerController();
exports.default = customerController;
