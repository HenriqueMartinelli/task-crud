import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks= async (req: Request, res: Response): Promise<Response> => {
    const tasks = await prisma.task.findMany();
    return res.json(tasks);
};

export const getTask = async (req: Request, res: Response): Promise<Response> => {
    const taskId = parseInt(req.params.id, 10); 
    try {
        const task = await prisma.task.findUniqueOrThrow({
            where: { id: taskId },
        });
        return res.json(task);
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' }); 
    }
};

export const createTask = async (req: Request, res: Response): Promise<Response> => {
    const { title, description, status } = req.body;
    const newTask = await prisma.task.create({
        data: {
            title,
            description,
            status,
        },
    });
    return res.json(newTask)
}

export const updateTask = async (req: Request, res: Response): Promise<Response> => {
    const taskId = parseInt(req.params.id, 10); 
    try {
        const updateTask = await prisma.task.update({
            where: { id: taskId },
            data: req.body,
        });
        return res.json(updateTask);
    } catch (error) {
        return res.status(404).json({ message: 'Task not Found'})
    }
};

export  const deleteTask = async (req: Request, res: Response): Promise<Response> => {
    const taskId = parseInt(req.params.id, 10);
    try {
        await prisma.task.delete({
            where: { id: taskId },
        });
        return res.json({ message: 'task deleted suceessfully'});
    } catch (error) {
        return res.status(404).json({ message: 'Task not found'});
    }
}