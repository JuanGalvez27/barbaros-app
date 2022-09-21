import express, { json } from "express"
import barbarosRoutes from './routes/barbaros.routes.js'
import { PORT } from "./config.js";

const app = express();

app.use(express.json())
app.use(barbarosRoutes)

app.listen(PORT);
console.log(`Server started on port ${PORT}`);



