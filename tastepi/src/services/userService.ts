import prisma from '../prisma/prisma';
import { hash } from 'bcrypt';

export const createUser = async (username: string, password: string, email: string, ) => {
    const hashedPassword = await hash(password, 12);

    return await prisma.user.create({
        data: { username, password: hashedPassword, email },
    });
};

export const getAllUsers = async () => {
    return await prisma.user.findMany();
};