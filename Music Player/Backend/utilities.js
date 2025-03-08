import dotenv from 'dotenv';

dotenv.config();
const API_KEY=process.env.API_KEY;

async function sendSongRequest(songName) {
    const url = `https://full-jio-saavn-data-api-with-streams-download-etc1.p.rapidapi.com/search/songs?query=${songName}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'full-jio-saavn-data-api-with-streams-download-etc1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
}

async function sendSuggestionsRequest() {
    const url = 'https://full-jio-saavn-data-api-with-streams-download-etc1.p.rapidapi.com/songs/icJam_5l/suggestions';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'full-jio-saavn-data-api-with-streams-download-etc1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
}

async function getSongsList(results) {
    const songs = [];
    let index = 0;
    for (const item in results) {
        const image = results[item]["image"]["2"];
        const downloadUrl = results[item]["downloadUrl"]["4"];
        const artists = results[item]["artists"]["primary"];
        const metaData = results[item];
        const details = {
            "id": metaData["id"],
            "name": metaData["name"],
            "type": metaData["type"],
            "year": metaData["year"],
            "language": metaData["language"],
            "duration": metaData["duration"],
            "playCount": metaData["playCount"],
            "hasLyrics": metaData["hasLyrics"],
            "index":index
        }
        const song = {
            "image": image,
            "downloadUrl": downloadUrl,
            "details": details,
            "artists" : artists
        }
        songs.push(song);

    }
    return songs;
}
export async function getSongs(query) {

    const data = await sendSongRequest(query);
    return await getSongsList(data.data.results);

}

export async function getSongsuggestions() {

    const data = await sendSuggestionsRequest();
    return await getSongsList(data.data);

}


async function fetchLyrics(songId) {
    const url = `https://full-jio-saavn-data-api-with-streams-download-etc1.p.rapidapi.com/songs/${songId}/lyrics`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'full-jio-saavn-data-api-with-streams-download-etc1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
}
export async function getLyrics(song) {

    const lyrics = await fetchLyrics(song);
    return lyrics["data"];
}