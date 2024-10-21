// export const createUserController = async (req: Request, res: Response) => {
//     const { username, password, email } = req.body;

//     try {
//         const user = await userService.createUser(username, password, email);
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json({ error: "User could not be created." });
//     }
// };