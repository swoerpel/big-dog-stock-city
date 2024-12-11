import express, { Request, Response } from 'express';
import { generateId } from './functions/generate-id.function';



const port = 3000;


enum Collection {
    Users = 'users',
    Purchases = 'purchases'
}

interface User {
    id: string;
    name: string;
    age: number;
    createdOn: Date;
}

interface Purchase {
    id: string;
    userId: string;
    amount: number;
    timestamp: Date;
}

interface Database{
    [Collection.Users]: User[];
    [Collection.Purchases]: Purchase[];
}

const database: Database = {
    [Collection.Users]: [],
    [Collection.Purchases]: []
}


const app = express();

app.post('/user', (req: Request, res: Response<any>) => {
    const {name,age} = req.body;
    const user: User = {
        id: generateId(),
        name,
        age,
        createdOn: new Date()
    }
    database[Collection.Users].push(user);
    res.send(user);
});

app.get('/user', (req: Request, res: Response<User[]>) => {
    res.send(database[Collection.Users]);
});

app.post('/purchase', (req: Request, res: Response<any>) => {
    const {userId, amount} = req.body;
    const purchase: Purchase = {
        id: generateId(),
        userId,
        amount,
        timestamp: new Date()
    }
    database[Collection.Purchases].push(purchase);
    res.send(purchase);
});

app.get('/purchase', (req: Request, res: Response<Purchase[]>) => {
    res.send(database[Collection.Purchases]);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});