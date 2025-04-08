import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getSongsuggestions, getSongs, getLyrics } from './utilities.js';
const app = express();
const PORT = 5000;
app.use(cors()); 
app.use(bodyParser.json());

app.post("/searchSongs", async (req, res) => {
    const songName = req.body.name;
    const data = await getSongs(songName);
    res.send({ 'data': data });
});

app.get("/suggestions",  (req, res) => {
    const suggestions =  getSongsuggestions();
    res.send({ 'data': suggestions });
});

app.post("/getLyrics", async (req, res) => {
    const songId = req.body.id;
    const lyrics = await getLyrics(songId);
    res.send(lyrics);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
