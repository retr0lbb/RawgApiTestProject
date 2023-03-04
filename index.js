const endPointUrl = 'https://api.rawg.io/api/games';
const apiKey = 'beddf6dea98848bf94a6a9d5f7f28e48';

const queryParams = {
    key: apiKey,
    page:1,
    page_size:'-rating',
    platforms: '18,1,7'
};
const url = `${endPointUrl}?${new URLSearchParams(queryParams)}`

fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data.results)
    })
    .catch(error => console.error(error))