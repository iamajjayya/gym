export const excerciseOptions  = {
    method: 'GET',
   
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_REACT_APP_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }

}

export const Youtubeoptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_REACT_APP_KEY,
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return null;
    }
};




