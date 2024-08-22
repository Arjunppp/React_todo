import express from 'express';
import { config } from "dotenv";
import cors from 'cors';
import { toDoRouter } from './routes/todoRouter.js';
import {dbConnection} from './connection.js'


config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT;
const connectionURL = process.env.MONGO_URI;

 

await dbConnection(connectionURL);

app.use('/' ,toDoRouter);


app.listen(port , () => 
{
    console.log('server running  on Port ' ,port);
    
})
