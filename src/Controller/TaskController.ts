import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Task } from "../entity/Task";

export const getTasks= async (req: Request, res: Response): Promise<Response> => {
    const tasks = await getRepository(Task).find();
    return res.json(tasks);
};

export const getTask = async (req: Request, res: Response): Promise<Response> => {
    const taskId = parseInt(req.params.id, 10); // Converter o id para number
    const task = await getRepository(Task).findOneBy({ id: taskId }); // Usando findOneBy para buscar por id
    if (task) {
        return res.json(task);
    }
    return res.status(404).json({ message: 'Task not found' }); // Retorna 404 se a tarefa não for encontrada
};

export const createTask = async (req: Request, res: Response): Promise<Response> => {
    const newTask = await getRepository(Task).create(req.body);
    const result = await getRepository(Task).save(newTask);
    return res.json(result);
}

export const updateTask = async (req: Request, res: Response): Promise<Response> => {
    const taskId = parseInt(req.params.id, 10); 
    const task = await getRepository(Task).findOneBy({ id: taskId });
    if (task) {
        getRepository(Task).merge(task, req.body); 
        const result = await getRepository(Task).save(task); 
        return res.json(result); 
    }
    return res.status(404).json({ message: 'Task not found' }); 
};

export  const deleteTask = async (req: Request, res: Response): Promise<Response> => {
    const result = await getRepository(Task).delete(req.params.id);
    return res.json(result);
}