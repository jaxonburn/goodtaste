import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import prisma from './prisma/prisma';

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});