import express from 'express';
import taskRoutes from './routes/taskRoutes';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use("/api", taskRoutes);

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})