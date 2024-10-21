import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const createUserController = async (req: Request, res: Response) => {
    const { username, password, email } = req.body;

    try {
        const user = await userService.createUser(username, password, email);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "User could not be created." });
    }
};

export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch users." });
    }
};

