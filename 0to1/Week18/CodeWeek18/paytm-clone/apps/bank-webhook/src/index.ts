import express from 'express';
import { PrismaClient } from '@repo/db'

const app = express();
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
    const name = await prisma.user.findFirst({
        where: {
            number: '03472295131'
        }
    })
    res.json({ message: `Hello World dsdsdsfrom ${name}`});
});

app.listen(3002, () => {
    console.log("webhook listening on port 3002")
})