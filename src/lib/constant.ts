import dotenv from 'dotenv';
dotenv.config();


const ENV_CONFIG = {
    PORT: process.env.PORT,
    PG_HOST: process.env.PG_HOST,
    PG_PORT: parseInt(process.env.PG_PORT || '5432'),
    PG_DB: process.env.PG_DB,
    PG_USER: process.env.PG_USER,
    PG_PASSWORD: process.env.PG_PASSWORD,
    DATABASE_URL: process.env.DATABASE_URL
};

const constant = {
    ENV_CONFIG
};

export default constant;