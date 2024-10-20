import prisma from '../prisma/prisma';

export const createUser = async (username: string, email: string) => {
    return await prisma.user.create({
        data: { username, email },
    });
};

export const getAllUsers = async () => {
    return await prisma.user.findMany();
};