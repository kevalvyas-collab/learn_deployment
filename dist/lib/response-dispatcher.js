"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseDispatcher {
    dispatch(res, data) {
        // const output = { message: "SUCCESS!", data: null };
        // if (data) output.data = data;
        res.status(res.statusCode).send({ message: "SUCCESS!", data });
    }
}
const responseDispatcher = new ResponseDispatcher();
exports.default = responseDispatcher;
