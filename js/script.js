
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.addEventListener('scroll', () => {
    const scrollTopButton = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});


const cards = document.querySelectorAll('[data-parallax="card"]');
let index = 0;
for (const card of cards) {
    card.style.setProperty('--index', index++);
}


function filterGames() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');
    
   
    const genreFilters = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(input => input.value);
    const platformFilters = Array.from(document.querySelectorAll('input[name="platform"]:checked')).map(input => input.value);
    const priceFilters = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(input => input.value);
    const languageFilters = Array.from(document.querySelectorAll('input[name="language"]:checked')).map(input => input.value);
    const playersFilters = Array.from(document.querySelectorAll('input[name="players"]:checked')).map(input => input.value);
    const controllerFilters = Array.from(document.querySelectorAll('input[name="controller"]:checked')).map(input => input.value);

    gameCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const genres = card.getAttribute('data-genre').split(',');
        const platforms = card.getAttribute('data-platform').split(',');
        const price = card.getAttribute('data-price');
        const languages = card.getAttribute('data-language').split(',');
        const players = card.getAttribute('data-players').split(',');
        const controller = card.getAttribute('data-controller');

       
        const matchesSearch = title.includes(searchInput);

  
        const matchesGenre = genreFilters.length === 0 || genres.some(genre => genreFilters.includes(genre));
        const matchesPlatform = platformFilters.length === 0 || platforms.some(platform => platformFilters.includes(platform));
        const matchesPrice = priceFilters.length === 0 || priceFilters.includes(price);
        const matchesLanguage = languageFilters.length === 0 || languages.some(language => languageFilters.includes(language));
        const matchesPlayers = playersFilters.length === 0 || players.some(player => playersFilters.includes(player));
        const matchesController = controllerFilters.length === 0 || controllerFilters.includes(controller);

        
        if (matchesSearch && matchesGenre && matchesPlatform && matchesPrice && matchesLanguage && matchesPlayers && matchesController) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}