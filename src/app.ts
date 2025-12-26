import express from "express";
import customerRoute from './routes/customer-route';
import rateLimiter from "./middleware/rate-limiter";

const app = express();

app.use(express.json());
app.use(rateLimiter);

app.get("/", function (req, res) {
    res.send("TypeScript Node API running on Render 🚀");
});

app.use("/api/", customerRoute);

export default app;
