

export const getSuggestedSongs = async () => {
  try {
    const response = await fetch('http://localhost:5000/suggestions');
    if (!response.ok) {
      console.error(`Error fetching songs: ${response.statusText}`);
    }
    const data = await response.json();
    return data["data"]; 
  } catch (error) {
    console.error('Failed to load songs:', error);
    return [];
  }

};


export const searchSongs = async (query) => {
  try {
    const response = await fetch('http://localhost:5000/searchSongs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: query }),
    });

    if (!response.ok) {
      console.error(`Error searching for songs: ${response.statusText}`);
    }

    const data = await response.json();

    return data["data"];
  } catch (error) {
    console.error('Failed to search for songs:', error);
    return [];
  }
};


export const getLyrics = async (songId) => {
  try {
    const response = await fetch('http://localhost:5000/getLyrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: songId }),
    });

    if (!response.ok) {
      console.error(`Error fetching lyrics: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data["lyrics"]);
    return data["lyrics"];
  } catch (error) {
    console.error('Failed to get lyrics:', error);
    return [];
  }
};



