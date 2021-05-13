import express from "express";
import config from "../config.json";

const app = express();
const port = config.server.port;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => { console.log(`Supply chain app listening on port ${port}!`); });