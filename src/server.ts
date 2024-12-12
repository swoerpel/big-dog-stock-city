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


// this is mimicing a database
// we will add, remove, and update records in this dict
// upon restarting the server this will be cleared
const database: Database = {
    [Collection.Users]: [],
    [Collection.Purchases]: []
}

// generateId() can be used to create unique, random ids

const app = express();

app.post('/user', (req: Request, res: Response<any>) => {
    // return created user
    res.send(null);
});

app.get('/users', (req: Request, res: Response<User[]>) => {
    // return all users
    res.send([]);
});

app.post('/purchase', (req: Request, res: Response<any>) => {
    // return created purchase
    res.send(null);
});

app.get('/purchase', (req: Request, res: Response<Purchase[]>) => {
    // return all purchases
    res.send([]);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});