// Problem 1: Convert to ES Modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Replicate from 'replicate';
import { c } from 'tar';

const replicate = new Replicate({
  auth: 'r8_BLht4sW1xHbhC3SUbeXEppUBDvPTQ7L2NRMjZ',
});
const app = express();

// Parse JSON bodies for this app. 
app.use(bodyParser.json());
app.use(cors());

app.post('/chat', async (req, res) => {
    const inputs = req.body;
    console.log(inputs);

    let eventString = "";
    for await (const event of replicate.stream("meta/llama-2-7b-chat", inputs)) {
        eventString += event.toString();
    }

    // Problem 2: Use 'res' to send a response back to the client
    console.log(eventString);
    res.send(eventString);
    // Your existing code
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});