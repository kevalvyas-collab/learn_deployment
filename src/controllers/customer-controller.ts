import { Request, response, Response } from "express";
import bcrypt from 'bcrypt';
import { Jwt } from "jsonwebtoken";
import postgresHelper from "../lib/db/postgres";
import responseDispatcher from "../lib/response-dispatcher";


class CustomerController {
    register = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const hash = await bcrypt.hash(password, 10);

            const insertQuery = `insert into app_users(email, password) values($1, $2)`;

            await postgresHelper.writeQuery(insertQuery, [email, hash]);

            responseDispatcher.dispatch(res, `This email are successfully register`);


        } catch (error) {
            console.error(error);
        }

    };
    login = (req: Request, res: Response) => {

    };

}


const customerController = new CustomerController();
export default customerController;