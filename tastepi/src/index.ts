import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import prisma from './prisma/prisma';
import { searchDiscoG  } from './services/discogService';

const app = express();
const port = process.env.PORT || 3000;


app.get('/api', (req: Request, res: Response) => {
  res.send('App running');
});

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// const result = searchDiscoG("Cigarettes after sex")

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});