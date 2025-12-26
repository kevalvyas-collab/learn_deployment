"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const constant_1 = __importDefault(require("../constant"));
console.log('all', constant_1.default);
class PostgresHelper {
    constructor() {
        this.client = new pg_1.Pool({
            host: constant_1.default.ENV_CONFIG.PG_HOST,
            database: constant_1.default.ENV_CONFIG.PG_DB,
            user: constant_1.default.ENV_CONFIG.PG_USER,
            password: constant_1.default.ENV_CONFIG.PG_PASSWORD,
            port: constant_1.default.ENV_CONFIG.PG_PORT,
        });
    }
    readQuery(dbQuery, params) {
        return new Promise((resolve, reject) => {
            this.client.query(dbQuery, params).then((res) => {
                resolve(res ? res.rows : res);
            }).catch((e) => {
                reject(e);
            });
        });
    }
    // for writing the data (insert/update/delete)
    writeQuery(dbQuery, params) {
        return new Promise((resolve, reject) => {
            this.client.query(dbQuery, params).then((res) => {
                resolve(res ? res.rows : res);
            }).catch((e) => {
                // errorNotifier.notify(e, dbQuery);
                reject(e);
            });
        });
    }
}
;
const postgresHelper = new PostgresHelper();
exports.default = postgresHelper;
