import dotenv from 'dotenv';
dotenv.config();


const API_KEY = process.env.API_KEY;


const songs = [
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/596/Calm-Down-English-2022-20220826054039-500x500.webp"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/596/0044bdbc00972a8496e65a68b1444597_320.mp4"
      },
      "details": {
        "id": "fy1SYD17",
        "name": "Calm Down",
        "type": "song",
        "year": "2022",
        "language": "english",
        "duration": 239,
        "playCount": 33367655,
        "hasLyrics": false,
        "index": 0
      },
      "artists": [
        {
          "id": "477817",
          "name": "Rema",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Rema_000_20231023070241_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Rema_000_20231023070241_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Rema_000_20231023070241_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        },
        {
          "id": "603812",
          "name": "Selena Gomez",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Selena_Gomez_003_20231023065157_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Selena_Gomez_003_20231023065157_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Selena_Gomez_003_20231023065157_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    },
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/681/Let-Me-Down-Slowly-English-2018-20190607042218-500x500.webp"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/681/724686666140f0e0249acff646210917_320.mp4"
      },
      "details": {
        "id": "nsMAIFmD",
        "name": "Let Me Down Slowly",
        "type": "song",
        "year": "2018",
        "language": "english",
        "duration": 169,
        "playCount": 47333431,
        "hasLyrics": false,
        "index": 1
      },
      "artists": [
        {
          "id": "760550",
          "name": "Alec Benjamin",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Alec_Benjamin_000_20191129075848_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Alec_Benjamin_000_20191129075848_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Alec_Benjamin_000_20191129075848_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    },
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/624/Se-orita-English-2019-20190822022326-500x500.webp"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/624/08f3aeb374b4b6d641c47a0400b52db2_320.mp4"
      },
      "details": {
        "id": "S3dGvXSb",
        "name": "Señorita",
        "type": "song",
        "year": "2019",
        "language": "english",
        "duration": 191,
        "playCount": 124363667,
        "hasLyrics": false,
        "index": 2
      },
      "artists": [
        {
          "id": "739614",
          "name": "Shawn Mendes",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Shawn_Mendes_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Shawn_Mendes_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Shawn_Mendes_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        },
        {
          "id": "1342580",
          "name": "Camila Cabello",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Camila_Cabello_001_20240530122029_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Camila_Cabello_001_20240530122029_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Camila_Cabello_001_20240530122029_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    },
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/866/On-My-Way-English-2019-20190308195918-500x500.webp"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/866/7e3a01418e755de4f0c9baee5febf6ad_320.mp4"
      },
      "details": {
        "id": "NJ_W1AG6",
        "name": "On My Way",
        "type": "song",
        "year": "2019",
        "language": "english",
        "duration": 199,
        "playCount": 121065473,
        "hasLyrics": false,
        "index": 3
      },
      "artists": [
        {
          "id": "1335467",
          "name": "Alan Walker",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Alan_Walker_003_20231116095443_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Alan_Walker_003_20231116095443_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Alan_Walker_003_20231116095443_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        },
        {
          "id": "603814",
          "name": "Sabrina Carpenter",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Sabrina_Carpenter_20191130072028_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Sabrina_Carpenter_20191130072028_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Sabrina_Carpenter_20191130072028_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        },
        {
          "id": "658010",
          "name": "Farruko",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Farruko_001_20231227115146_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Farruko_001_20231227115146_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Farruko_001_20231227115146_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    },
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/273/Encore-English-2016-20190419221937-500x500.webp"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/273/d1912077904b928c57eeb27b4b61d068_320.mp4"
      },
      "details": {
        "id": "j8hvJDPs",
        "name": "Let Me Love You",
        "type": "song",
        "year": "2016",
        "language": "english",
        "duration": 205,
        "playCount": 130508997,
        "hasLyrics": false,
        "index": 4
      },
      "artists": [
        {
          "id": "568648",
          "name": "DJ Snake",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Dj_Snake_005_20200822045249_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Dj_Snake_005_20200822045249_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Dj_Snake_005_20200822045249_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    },
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/286/71bb6cc3391ddf619a4a3f1a1134f1c4_320.mp4"
      },
      "details": {
        "id": "6o8JoQ8b",
        "name": "Perfect",
        "type": "song",
        "year": "2017",
        "language": "english",
        "duration": 263,
        "playCount": 79482004,
        "hasLyrics": false,
        "index": 5
      },
      "artists": [
        {
          "id": "578407",
          "name": "Ed Sheeran",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Ed_Sheeran_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Ed_Sheeran_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Ed_Sheeran_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    },
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/722/Cheap-Thrills-English-2015-500x500.jpg"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/722/7f3218eb23ec7273f73d5317e5083d7e_320.mp4"
      },
      "details": {
        "id": "4RmwbCw4",
        "name": "Cheap Thrills",
        "type": "song",
        "year": "2015",
        "language": "english",
        "duration": 210,
        "playCount": 119054360,
        "hasLyrics": false,
        "index": 6
      },
      "artists": [
        {
          "id": "568707",
          "name": "Sia",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Sia_002_20200921152829_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Sia_002_20200921152829_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Sia_002_20200921152829_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    },
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/038/Bones-English-2022-20220311113603-500x500.webp"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/038/c4264a7fa9010487ee0857403925e5f8_320.mp4"
      },
      "details": {
        "id": "yDeAS8Eh",
        "name": "Bones",
        "type": "song",
        "year": "2022",
        "language": "english",
        "duration": 165,
        "playCount": 21066716,
        "hasLyrics": false,
        "index": 7
      },
      "artists": [
        {
          "id": "599452",
          "name": "Imagine Dragons",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Imagine_Dragons_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Imagine_Dragons_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Imagine_Dragons_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    },
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/289/Harleys-In-Hawaii-English-2019-20191015230756-500x500.webp"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/289/a321dc07022639f00ddacabffcb38220_320.mp4"
      },
      "details": {
        "id": "8N_6I8Gn",
        "name": "Harleys In Hawaii",
        "type": "song",
        "year": "2019",
        "language": "english",
        "duration": 186,
        "playCount": 39113220,
        "hasLyrics": false,
        "index": 8
      },
      "artists": [
        {
          "id": "565740",
          "name": "Katy Perry",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Katy_Perry_004_20200616105931_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Katy_Perry_004_20200616105931_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Katy_Perry_004_20200616105931_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    },
    {
      "image": {
        "quality": "500x500",
        "url": "https://c.saavncdn.com/728/My-World-2-0-English-2010-20200606003742-500x500.webp"
      },
      "downloadUrl": {
        "quality": "320kbps",
        "url": "https://aac.saavncdn.com/728/94485509c750427c19faa074404292c8_320.mp4"
      },
      "details": {
        "id": "H0IRhlNT",
        "name": "Baby",
        "type": "song",
        "year": "2010",
        "language": "english",
        "duration": 216,
        "playCount": 55776199,
        "hasLyrics": false,
        "index": 9
      },
      "artists": [
        {
          "id": "568565",
          "name": "Justin Bieber",
          "role": "primary_artists",
          "image": [
            {
              "quality": "50x50",
              "url": "https://c.saavncdn.com/artists/Justin_Bieber_005_20201127112218_50x50.jpg"
            },
            {
              "quality": "150x150",
              "url": "https://c.saavncdn.com/artists/Justin_Bieber_005_20201127112218_150x150.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://c.saavncdn.com/artists/Justin_Bieber_005_20201127112218_500x500.jpg"
            }
          ],
          "type": "artist",
          "url": ""
        }
      ]
    }
  ]

async function sendSongRequest(songName) {
    const url = `https://saavn.dev/api/search/songs?query=${songName}`;
   

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// export async function sendSuggestionsRequest() {
//     const url = 'https://saavn.dev/api/songs/icJam_5l/suggestions';
//     // const options = {
//     //     method: 'GET',
//     //     headers: {
//     //         'x-rapidapi-key': API_KEY,
//     //         'x-rapidapi-host': 'full-jio-saavn-data-api-with-streams-download-etc1.p.rapidapi.com'
//     //     }
//     // };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         return result;
//     } catch (error) {
//         return error;
//     }
// }

async function getSongsList(results) {
    
    const songs =[];
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

export  function getSongsuggestions() {
    return songs;
}


async function fetchLyrics(songId) {
    const url = `https://saavn.dev/api/songs/${songId}/lyrics`;
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

