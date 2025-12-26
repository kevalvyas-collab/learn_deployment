import app from "./app";
import constant from "./lib/constant";


const PORT = constant.ENV_CONFIG.PORT;


app.listen(PORT, () => console.log(`server are listen on port --- > ${PORT}`));

