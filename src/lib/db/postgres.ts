import { Pool } from 'pg';
import constants from "../constant";

class PostgresHelper {
    private client: Pool;
    constructor() {
        this.client = new Pool({
            host: constants.ENV_CONFIG.PG_HOST,
            database: constants.ENV_CONFIG.PG_DB,
            user: constants.ENV_CONFIG.PG_USER,
            password: constants.ENV_CONFIG.PG_PASSWORD,
            port: constants.ENV_CONFIG.PG_PORT,
        });
    }

    public readQuery(dbQuery: string, params?: any[]): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.client.query(dbQuery, params).then((res: any) => {
                resolve(res ? res.rows : res);
            }).catch((e: Error) => {
                reject(e);
            });
        });
    }

    // for writing the data (insert/update/delete)
    public writeQuery(dbQuery: string, params?: any[]): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.client.query(dbQuery, params).then((res: any) => {
                resolve(res ? res.rows : res);
            }).catch((e: Error) => {
                // errorNotifier.notify(e, dbQuery);
                reject(e);
            });
        });
    }
};

const postgresHelper = new PostgresHelper();
export default postgresHelper;
