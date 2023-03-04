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
    .then((data) => {
        const gameListContainer = document.getElementById('gameList');
        const games = data.results;
        games.forEach((game) => {
          const gameTitle = document.createElement('p');
          gameTitle.textContent = game.name;
          gameListContainer.appendChild(gameTitle);

          const gameImage = document.createElement('img');
          gameImage.src = game.background_image;
          gameListContainer.appendChild(gameImage);
        });
      })
      .catch((error) => console.error(error));
