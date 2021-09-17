  export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=VO8kI2aZVoSVHx2N0wLS8ITH0CHoEW2a`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    return gifs;
  }