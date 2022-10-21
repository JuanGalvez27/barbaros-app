// Importaciones
import express, { json } from "express"
import barbarosRoutes from './routes/barbaros.routes.js'
import { PORT } from "./config.js";
import morgan from 'morgan'
import cors from 'cors'
// Inicializacion
const app = express();

// Middlewares
app.use(morgan('tiny'))
app.use(express.json())
app.use(barbarosRoutes)
app.use(cors())

// Configuraciones
app.listen(PORT);
console.log(`Server started on port ${PORT}`);


