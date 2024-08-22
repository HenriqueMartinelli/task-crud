import 'reflect-metadata';
import express from 'express';
import { connectDB } from './database/connection';
import taskRoutes from './routes/taskRoutes';

const app = express();
connectDB();

app.use(express.json());
app.use("/api", taskRoutes);

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})