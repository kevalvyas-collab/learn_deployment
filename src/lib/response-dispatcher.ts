import { Response } from 'express';



class ResponseDispatcher {
    public dispatch(res: Response, data?: any) {
        // const output = { message: "SUCCESS!", data: null };
        // if (data) output.data = data;
        res.status(res.statusCode).send({ message: "SUCCESS!", data });
    }

    // public dispatchError(res: Response, error: Error, code?: number) {
    //     const errorData = constants.ERROR_CODES[error.message] || { code: code || 500, message: error.message };
    //     productionLog(`dispatch E: "${res.req.originalUrl}" B:${JSON.stringify(res.req.body)} ${errorData.message}`);
    //     res.status(errorData.code).send({ message: errorData.message });
    // }

    // notifyError(error: Error, otherData?: any) {
    //     if (
    //         !constants.ERROR_CODES[error.message] ||
    //         constants.ERROR_CODES[error.message].notify
    //     ) {
    //         console.log(error, otherData);
    //     }
    // }
}

const responseDispatcher = new ResponseDispatcher();
export default responseDispatcher;
