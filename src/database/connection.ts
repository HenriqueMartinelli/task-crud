import { createConnection } from "typeorm";
import { Task } from '../entity/Task';


export const connectDB = async () => {
    await createConnection({
        type: 'sqlite',
        database: 'database.sqlite',
        synchronize: true,
        entities: [Task],
    });
};